// backend/utils/renewalChecker.js
// Automated domain renewal reminder system

import nodemailer from 'nodemailer';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

/**
 * Check all domains and send renewal reminders for those expiring in 30 days
 * This should be run daily via cron job
 */
export async function checkDomainRenewals(db) {
    console.log('\n='.repeat(60));
    console.log('📅 DOMAIN RENEWAL CHECK - ' + new Date().toLocaleString());
    console.log('='.repeat(60));

    try {
        const now = new Date();
        // Use 29-31 days to give a wider window and catch domains created at different times
        const twentyNineDaysFromNow = new Date(now.getTime() + (29 * 24 * 60 * 60 * 1000));
        const thirtyOneDaysFromNow = new Date(now.getTime() + (31 * 24 * 60 * 60 * 1000));

        console.log('🔍 Checking for domains expiring between:');
        console.log(`   ${twentyNineDaysFromNow.toLocaleDateString()} - ${thirtyOneDaysFromNow.toLocaleDateString()}`);

        // Query domains that:
        // 1. Expire in 29-31 days (wider window to catch all domains around 30-day mark)
        // 2. Haven't been notified yet
        // 3. Are still active
        const renewalsSnapshot = await db.collection('domainRenewals')
            .where('status', '==', 'active')
            .where('renewalNotificationSent', '==', false)
            .where('renewalDate', '>=', twentyNineDaysFromNow)
            .where('renewalDate', '<=', thirtyOneDaysFromNow)
            .get();

        if (renewalsSnapshot.empty) {
            console.log('✅ No domains need renewal reminders today');
            console.log('='.repeat(60) + '\n');
            return { success: true, reminded: 0 };
        }

        console.log(`📧 Found ${renewalsSnapshot.size} domain(s) needing renewal reminder\n`);

        let reminded = 0;
        let failed = 0;

        for (const doc of renewalsSnapshot.docs) {
            const renewal = doc.data();
            const renewalId = doc.id;

            console.log(`\n📋 Processing: ${renewal.domain}`);
            console.log(`   Client: ${renewal.clientEmail}`);
            console.log(`   Expires: ${renewal.renewalDate.toDate().toLocaleDateString()}`);
            console.log(`   Price: $${renewal.renewalPrice}`);

            try {
                // Create Stripe payment link for renewal
                const paymentLink = await createRenewalPaymentLink(
                    renewal.domain,
                    renewal.renewalPrice,
                    renewal.clientEmail,
                    renewalId
                );

                // Send renewal reminder email
                await sendRenewalReminderEmail(renewal, paymentLink);

                // Mark as notified
                await db.collection('domainRenewals').doc(renewalId).update({
                    renewalNotificationSent: true,
                    notificationSentAt: new Date(),
                    paymentLink: paymentLink
                });

                console.log('   ✅ Reminder sent successfully');
                reminded++;

            } catch (error) {
                console.error('   ❌ Failed to send reminder:', error.message);
                failed++;

                // Log the error but continue with other domains
                await db.collection('domainRenewals').doc(renewalId).update({
                    lastReminderError: error.message,
                    lastReminderErrorAt: new Date()
                });
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log('📊 RENEWAL CHECK SUMMARY');
        console.log('='.repeat(60));
        console.log(`✅ Reminders sent: ${reminded}`);
        console.log(`❌ Failed: ${failed}`);
        console.log(`📅 Next check: ${new Date(now.getTime() + (24 * 60 * 60 * 1000)).toLocaleString()}`);
        console.log('='.repeat(60) + '\n');

        return { success: true, reminded, failed };

    } catch (error) {
        console.error('❌ Renewal check failed:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Create Stripe payment link for domain renewal
 */
async function createRenewalPaymentLink(domain, price, customerEmail, renewalId) {
    try {
        const priceInCents = Math.round(price * 100);

        // Create a Stripe Payment Link
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Domain Renewal: ${domain}`,
                            description: `Annual renewal for ${domain}`,
                        },
                        unit_amount: priceInCents,
                    },
                    quantity: 1,
                },
            ],
            after_completion: {
                type: 'redirect',
                redirect: {
                    url: `${process.env.SITE_URL}/renewal-success.html?domain=${encodeURIComponent(domain)}`,
                },
            },
            metadata: {
                type: 'domain_renewal',
                domain: domain,
                renewalId: renewalId,
            },
            customer_creation: 'always',
        });

        console.log(`   💳 Payment link created: ${paymentLink.url}`);
        return paymentLink.url;

    } catch (error) {
        console.error('   ❌ Failed to create payment link:', error.message);
        throw error;
    }
}

/**
 * Send renewal reminder email to client
 */
async function sendRenewalReminderEmail(renewal, paymentLink) {
    const expiryDate = renewal.renewalDate.toDate();
    const daysUntilExpiry = Math.ceil((expiryDate - new Date()) / (1000 * 60 * 60 * 24));

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .alert-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .domain-box {
            background: white;
            border: 2px solid #667eea;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            text-align: center;
        }
        .domain-name {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
            margin: 10px 0;
        }
        .price {
            font-size: 32px;
            font-weight: bold;
            color: #059669;
            margin: 15px 0;
        }
        .button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
        }
        .details {
            background: white;
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔔 Domain Renewal Reminder</h1>
    </div>
    <div class="content">
        <div class="alert-box">
            <strong>⏰ Action Required:</strong> Your domain renewal is due in ${daysUntilExpiry} days
        </div>

        <p>Hi there,</p>
        <p>This is a friendly reminder that your domain registration is coming up for renewal.</p>

        <div class="domain-box">
            <p style="margin: 0; color: #6b7280;">Your Domain</p>
            <div class="domain-name">${renewal.domain}</div>
            <p style="margin: 10px 0 0 0; color: #6b7280;">for <strong>${renewal.clientBusinessName}</strong></p>
        </div>

        <div class="details">
            <p style="margin: 5px 0;"><strong>Renewal Date:</strong> ${expiryDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 5px 0;"><strong>Renewal Price:</strong> <span style="color: #059669; font-size: 18px; font-weight: bold;">$${renewal.renewalPrice.toFixed(2)}</span></p>
            <p style="margin: 5px 0;"><strong>Billing Period:</strong> 1 Year</p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
            <a href="${paymentLink}" class="button">
                Renew Domain Now ($${renewal.renewalPrice.toFixed(2)})
            </a>
        </div>

        <div style="background: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px; margin: 20px 0;">
            <strong>📌 What happens if I don't renew?</strong><br>
            <p style="margin: 10px 0 0 0;">
                If your domain expires, your website will go offline and visitors won't be able to access it. 
                We'll keep your website files safe, but the domain will no longer point to your site.
            </p>
        </div>

        <div style="background: #f0fdf4; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px; margin: 20px 0;">
            <strong>✅ Renewing is easy!</strong><br>
            <p style="margin: 10px 0 0 0;">
                Just click the button above to pay securely with your credit card. 
                Your domain will automatically be renewed for another year and your site will stay online.
            </p>
        </div>

        <p style="margin-top: 30px;">Questions? Just reply to this email or call us at <strong>(415) 691-7085</strong></p>

        <p style="margin-top: 20px;">Best regards,<br><strong>The Holy Smokas Team</strong></p>
    </div>
    <div class="footer">
        <p>Holy Smokas - Professional Websites That's Cheap!</p>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 10px;">
            This is an automated reminder for domain: ${renewal.domain}<br>
            Expires: ${expiryDate.toLocaleDateString()}
        </p>
    </div>
</body>
</html>`;

    await transporter.sendMail({
        from: `"Holy Smokas - Domain Renewal" <${process.env.SMTP_USER}>`,
        to: renewal.clientEmail,
        subject: `🔔 Domain Renewal Due: ${renewal.domain} (${daysUntilExpiry} days)`,
        html: emailHtml
    });

    console.log(`   📧 Renewal email sent to: ${renewal.clientEmail}`);
}

/**
 * Process domain renewal after payment is received
 * This is called from the Stripe webhook
 */
export async function processDomainRenewal(renewalId, paymentIntent, db) {
    console.log(`\n💰 Processing domain renewal payment: ${renewalId}`);

    try {
        const renewalRef = db.collection('domainRenewals').doc(renewalId);
        const renewalDoc = await renewalRef.get();

        if (!renewalDoc.exists) {
            throw new Error('Renewal record not found');
        }

        const renewal = renewalDoc.data();
        console.log(`   Domain: ${renewal.domain}`);
        console.log(`   Client: ${renewal.clientEmail}`);

        // Update renewal record
        const newRenewalDate = new Date(renewal.renewalDate.toDate());
        newRenewalDate.setFullYear(newRenewalDate.getFullYear() + 1);

        await renewalRef.update({
            status: 'paid',
            paidAt: new Date(),
            paymentIntent: paymentIntent,
            renewalDate: newRenewalDate,
            renewalNotificationSent: false, // Reset for next year
            lastPaymentAmount: renewal.renewalPrice
        });

        console.log(`   ✅ Renewal record updated`);
        console.log(`   📅 New expiry date: ${newRenewalDate.toLocaleDateString()}`);

        // TODO: Actually renew domain in Namecheap
        // This would call Namecheap API to extend domain registration
        // For now, you'll handle this manually

        // Send confirmation email
        await sendRenewalConfirmationEmail(renewal, newRenewalDate);

        console.log(`   ✅ Domain renewal complete`);

        return { success: true };

    } catch (error) {
        console.error(`   ❌ Renewal processing failed:`, error.message);
        return { success: false, error: error.message };
    }
}

/**
 * Send renewal confirmation email
 */
async function sendRenewalConfirmationEmail(renewal, newExpiryDate) {
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .success-box {
            background: #f0fdf4;
            border: 2px solid #10b981;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            text-align: center;
        }
        .domain-name {
            font-size: 24px;
            font-weight: bold;
            color: #059669;
            margin: 10px 0;
        }
        .details {
            background: white;
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>✅ Domain Renewed Successfully!</h1>
    </div>
    <div class="content">
        <div class="success-box">
            <p style="font-size: 48px; margin: 0;">✅</p>
            <p style="margin: 10px 0; font-size: 18px;">Payment Received</p>
            <div class="domain-name">${renewal.domain}</div>
            <p style="margin: 10px 0 0 0; color: #6b7280;">has been renewed for 1 year</p>
        </div>

        <p>Hi there,</p>
        <p>Great news! Your domain has been successfully renewed and your website will continue running without interruption.</p>

        <div class="details">
            <p style="margin: 5px 0;"><strong>Domain:</strong> ${renewal.domain}</p>
            <p style="margin: 5px 0;"><strong>Renewed For:</strong> 1 Year</p>
            <p style="margin: 5px 0;"><strong>Amount Paid:</strong> $${renewal.renewalPrice.toFixed(2)}</p>
            <p style="margin: 5px 0;"><strong>New Expiry Date:</strong> ${newExpiryDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div style="background: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px; margin: 20px 0;">
            <strong>📌 What's next?</strong><br>
            <p style="margin: 10px 0 0 0;">
                Nothing! Your domain is active and your website will continue working normally. 
                We'll remind you again 30 days before your next renewal date.
            </p>
        </div>

        <p style="margin-top: 30px;">Thank you for being a valued Holy Smokas client!</p>

        <p style="margin-top: 20px;">Best regards,<br><strong>The Holy Smokas Team</strong></p>
    </div>
</body>
</html>`;

    await transporter.sendMail({
        from: `"Holy Smokas" <${process.env.SMTP_USER}>`,
        to: renewal.clientEmail,
        subject: `✅ Domain Renewed: ${renewal.domain}`,
        html: emailHtml
    });

    console.log(`   📧 Confirmation email sent`);
}