// backend/utils/domainManager.js
// Handles all domain registration, DNS configuration, and GitHub Pages setup

import axios from "axios";
import xml2js from "xml2js";
import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

dotenv.config();

/**
 * ============================================
 * HOW THIS MODULE WORKS - COMPLETE EXPLANATION
 * ============================================
 * 
 * OVERVIEW:
 * This module automates the entire process of setting up a custom domain for a client's website.
 * All domains are registered under YOUR Namecheap account, and you bill the client for renewals.
 * 
 * WORKFLOW:
 * 1. Client pays for website + domain through Stripe
 * 2. Website gets generated and deployed to GitHub Pages
 * 3. This module automatically:
 *    - Registers the domain with Namecheap (under YOUR account)
 *    - Configures DNS to point to GitHub Pages
 *    - Adds custom domain to the GitHub repository
 *    - Updates project records in Firestore
 *    - Creates renewal tracking for billing
 * 
 * NAMECHEAP API FLOW:
 * - namecheap.domains.create → Registers the domain
 * - namecheap.domains.dns.setHosts → Points domain to GitHub's IPs
 * 
 * GITHUB PAGES FLOW:
 * - Creates CNAME file in repo root with domain name
 * - GitHub automatically provisions SSL certificate
 * - Site becomes accessible at custom domain after DNS propagation
 * 
 * DNS PROPAGATION:
 * - Takes 24-48 hours globally
 * - Site remains accessible via github.io URL during this time
 * 
 * BILLING:
 * - Initial domain cost charged through Stripe at checkout
 * - Renewal tracked in Firestore 'domainRenewals' collection
 * - You charge client when renewal is due (handled separately)
 */

/**
 * Step 1: Register Domain with Namecheap
 * 
 * What it does:
 * - Calls Namecheap API to purchase the domain
 * - Uses YOUR contact info for all WHOIS records
 * - Returns domain ID for tracking
 * 
 * @param {string} domainName - The domain to register (e.g., "example.com")
 * @param {string} clientEmail - Client's email for tracking purposes
 * @param {string} clientBusinessName - Client's business name
 * @returns {Object} - { success, domainID, domain } or { success: false, error }
 */
export async function registerDomainForClient(domainName, clientEmail, clientBusinessName) {
    console.log(`\n🌐 STEP 1: Registering domain with Namecheap`);
    console.log(`   Domain: ${domainName}`);
    console.log(`   Client: ${clientEmail} (${clientBusinessName})`);

    try {
        // YOUR contact information (stored in .env file)
        // This info will appear in WHOIS records
        const yourContactInfo = {
            firstName: process.env.DOMAIN_REGISTRANT_FIRST_NAME || 'Holy',
            lastName: process.env.DOMAIN_REGISTRANT_LAST_NAME || 'Smokas',
            email: process.env.DOMAIN_REGISTRANT_EMAIL || 'holysmokasthatscheap@gmail.com',
            phone: process.env.DOMAIN_REGISTRANT_PHONE || '+1.4156917085',
            address: process.env.DOMAIN_REGISTRANT_ADDRESS || '123 Startup Ave',
            city: process.env.DOMAIN_REGISTRANT_CITY || 'San Francisco',
            state: process.env.DOMAIN_REGISTRANT_STATE || 'CA',
            zip: process.env.DOMAIN_REGISTRANT_ZIP || '94102',
            country: process.env.DOMAIN_REGISTRANT_COUNTRY || 'US'
        };

        console.log(`   Registrant: ${yourContactInfo.firstName} ${yourContactInfo.lastName}`);

        // Build Namecheap API URL
        // Namecheap requires 4 contacts: Registrant, Tech, Admin, Billing
        // We use YOUR info for all 4 contacts
        const registerUrl = `${process.env.NAMECHEAP_API_URL}?` +
            `ApiUser=${process.env.NAMECHEAP_API_USER}&` +
            `ApiKey=${process.env.NAMECHEAP_API_KEY}&` +
            `UserName=${process.env.NAMECHEAP_API_USER}&` +
            `ClientIp=${process.env.NAMECHEAP_CLIENT_IP}&` +
            `Command=namecheap.domains.create&` +
            `DomainName=${domainName}&` +
            `Years=1&` +
            // Registrant Contact (Domain Owner)
            `RegistrantFirstName=${encodeURIComponent(yourContactInfo.firstName)}&` +
            `RegistrantLastName=${encodeURIComponent(yourContactInfo.lastName)}&` +
            `RegistrantAddress1=${encodeURIComponent(yourContactInfo.address)}&` +
            `RegistrantCity=${encodeURIComponent(yourContactInfo.city)}&` +
            `RegistrantStateProvince=${encodeURIComponent(yourContactInfo.state)}&` +
            `RegistrantPostalCode=${encodeURIComponent(yourContactInfo.zip)}&` +
            `RegistrantCountry=${encodeURIComponent(yourContactInfo.country)}&` +
            `RegistrantPhone=${encodeURIComponent(yourContactInfo.phone)}&` +
            `RegistrantEmailAddress=${encodeURIComponent(yourContactInfo.email)}&` +
            // Tech Contact (Technical Administrator)
            `TechFirstName=${encodeURIComponent(yourContactInfo.firstName)}&` +
            `TechLastName=${encodeURIComponent(yourContactInfo.lastName)}&` +
            `TechAddress1=${encodeURIComponent(yourContactInfo.address)}&` +
            `TechCity=${encodeURIComponent(yourContactInfo.city)}&` +
            `TechStateProvince=${encodeURIComponent(yourContactInfo.state)}&` +
            `TechPostalCode=${encodeURIComponent(yourContactInfo.zip)}&` +
            `TechCountry=${encodeURIComponent(yourContactInfo.country)}&` +
            `TechPhone=${encodeURIComponent(yourContactInfo.phone)}&` +
            `TechEmailAddress=${encodeURIComponent(yourContactInfo.email)}&` +
            // Admin Contact (Administrative Contact)
            `AdminFirstName=${encodeURIComponent(yourContactInfo.firstName)}&` +
            `AdminLastName=${encodeURIComponent(yourContactInfo.lastName)}&` +
            `AdminAddress1=${encodeURIComponent(yourContactInfo.address)}&` +
            `AdminCity=${encodeURIComponent(yourContactInfo.city)}&` +
            `AdminStateProvince=${encodeURIComponent(yourContactInfo.state)}&` +
            `AdminPostalCode=${encodeURIComponent(yourContactInfo.zip)}&` +
            `AdminCountry=${encodeURIComponent(yourContactInfo.country)}&` +
            `AdminPhone=${encodeURIComponent(yourContactInfo.phone)}&` +
            `AdminEmailAddress=${encodeURIComponent(yourContactInfo.email)}&` +
            // Billing Contact (Billing Administrator)
            `AuxBillingFirstName=${encodeURIComponent(yourContactInfo.firstName)}&` +
            `AuxBillingLastName=${encodeURIComponent(yourContactInfo.lastName)}&` +
            `AuxBillingAddress1=${encodeURIComponent(yourContactInfo.address)}&` +
            `AuxBillingCity=${encodeURIComponent(yourContactInfo.city)}&` +
            `AuxBillingStateProvince=${encodeURIComponent(yourContactInfo.state)}&` +
            `AuxBillingPostalCode=${encodeURIComponent(yourContactInfo.zip)}&` +
            `AuxBillingCountry=${encodeURIComponent(yourContactInfo.country)}&` +
            `AuxBillingPhone=${encodeURIComponent(yourContactInfo.phone)}&` +
            `AuxBillingEmailAddress=${encodeURIComponent(yourContactInfo.email)}`;

        // Make API call to Namecheap
        const response = await axios.get(registerUrl);
        const parsed = await xml2js.parseStringPromise(response.data);

        // Check if API call was successful
        if (parsed.ApiResponse.$.Status !== 'OK') {
            const errors = parsed.ApiResponse.Errors?.[0]?.Error || [];
            const errorMsg = errors.length > 0 ? errors[0]._ : 'Unknown error';
            throw new Error(`Domain registration failed: ${errorMsg}`);
        }

        // Extract domain registration result
        const domainCreateResult = parsed.ApiResponse.CommandResponse?.[0]?.DomainCreateResult?.[0];
        const registered = domainCreateResult?.$.Registered === 'true';
        const domainID = domainCreateResult?.$.DomainID;

        if (!registered) {
            throw new Error('Domain registration returned false');
        }

        console.log(`   ✅ SUCCESS! Domain registered`);
        console.log(`   Domain ID: ${domainID}`);
        console.log(`   Registered under: ${yourContactInfo.email}`);

        return {
            success: true,
            domainID: domainID,
            domain: domainName,
            registered: true,
            clientEmail: clientEmail,
            clientBusinessName: clientBusinessName
        };

    } catch (error) {
        console.error(`   ❌ FAILED:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Step 2: Configure DNS Records
 * 
 * What it does:
 * - Sets up A records pointing to GitHub Pages IP addresses
 * - Sets up CNAME record for www subdomain
 * - These DNS settings tell browsers where to find your site
 * 
 * DNS Records Created:
 * - @ (apex domain) → 4 A records pointing to GitHub IPs
 * - www → CNAME pointing to username.github.io
 * 
 * @param {string} domainName - The domain to configure
 * @param {string} githubUsername - Your GitHub username
 * @returns {Object} - { success, domain, records } or { success: false, error }
 */
export async function configureDNSForGitHubPages(domainName, githubUsername) {
    console.log(`\n🔧 STEP 2: Configuring DNS records`);
    console.log(`   Domain: ${domainName}`);
    console.log(`   GitHub: ${githubUsername}.github.io`);

    try {
        // Split domain into SLD (Second Level Domain) and TLD (Top Level Domain)
        // Example: "example.com" → SLD: "example", TLD: "com"
        const parts = domainName.split('.');
        const sld = parts.slice(0, -1).join('.');
        const tld = parts[parts.length - 1];

        // GitHub Pages IP addresses (official, updated as of 2024)
        // These are GitHub's edge servers that host Pages sites
        const githubIPs = [
            '185.199.108.153',
            '185.199.109.153',
            '185.199.110.153',
            '185.199.111.153'
        ];

        // Build DNS records for Namecheap API
        // Namecheap API requires numbered parameters (HostName1, HostName2, etc.)
        let recordNum = 1;
        const records = [];

        // Add A records for apex domain (@)
        // @ means "the domain itself" (example.com, not www.example.com)
        githubIPs.forEach(ip => {
            records.push(
                `HostName${recordNum}=@&` +
                `RecordType${recordNum}=A&` +
                `Address${recordNum}=${ip}&` +
                `TTL${recordNum}=1800` // 30 minutes cache time
            );
            recordNum++;
        });

        // Add CNAME for www subdomain
        // This makes www.example.com work too
        records.push(
            `HostName${recordNum}=www&` +
            `RecordType${recordNum}=CNAME&` +
            `Address${recordNum}=${githubUsername}.github.io.&` +
            `TTL${recordNum}=1800`
        );

        const recordsString = records.join('&');

        // Build Namecheap API URL for DNS configuration
        const setHostsUrl = `${process.env.NAMECHEAP_API_URL}?` +
            `ApiUser=${process.env.NAMECHEAP_API_USER}&` +
            `ApiKey=${process.env.NAMECHEAP_API_KEY}&` +
            `UserName=${process.env.NAMECHEAP_API_USER}&` +
            `ClientIp=${process.env.NAMECHEAP_CLIENT_IP}&` +
            `Command=namecheap.domains.dns.setHosts&` +
            `SLD=${encodeURIComponent(sld)}&` +
            `TLD=${encodeURIComponent(tld)}&` +
            recordsString;

        // Make API call to set DNS records
        const response = await axios.get(setHostsUrl);
        const parsed = await xml2js.parseStringPromise(response.data);

        if (parsed.ApiResponse.$.Status !== 'OK') {
            const errors = parsed.ApiResponse.Errors?.[0]?.Error || [];
            const errorMsg = errors.length > 0 ? errors[0]._ : 'Unknown error';
            throw new Error(`DNS configuration failed: ${errorMsg}`);
        }

        const isSuccess = parsed.ApiResponse.CommandResponse?.[0]?.DomainDNSSetHostsResult?.[0]?.$.IsSuccess === 'true';

        if (!isSuccess) {
            throw new Error('DNS configuration returned false');
        }

        console.log(`   ✅ SUCCESS! DNS configured`);
        console.log(`   A Records: ${githubIPs.join(', ')}`);
        console.log(`   CNAME: www → ${githubUsername}.github.io`);

        return {
            success: true,
            domain: domainName,
            records: githubIPs,
            cname: `www → ${githubUsername}.github.io`
        };

    } catch (error) {
        console.error(`   ❌ FAILED:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Step 3: Configure GitHub Pages
 * 
 * What it does:
 * - Creates a CNAME file in the repository root
 * - CNAME file contains just the domain name (e.g., "example.com")
 * - GitHub reads this file and knows to serve the site at that domain
 * - GitHub automatically provisions SSL certificate for HTTPS
 * 
 * @param {string} repoName - GitHub repository name
 * @param {string} customDomain - The custom domain
 * @returns {Object} - { success, domain, repoName } or { success: false, error }
 */
export async function addCustomDomainToGitHubPages(repoName, customDomain) {
    console.log(`\n🔗 STEP 3: Configuring GitHub Pages`);
    console.log(`   Repository: ${repoName}`);
    console.log(`   Custom Domain: ${customDomain}`);

    try {
        const octokit = new Octokit({ auth: process.env.GIT_TOKEN });
        const owner = process.env.GIT_USERNAME;

        // Create CNAME file content
        // The CNAME file should contain ONLY the domain name, nothing else
        const cnameContent = Buffer.from(customDomain).toString('base64');

        console.log(`   Creating CNAME file...`);

        try {
            // Check if CNAME file already exists
            const { data: existingFile } = await octokit.repos.getContent({
                owner,
                repo: repoName,
                path: 'CNAME'
            });

            // Update existing CNAME file
            await octokit.repos.createOrUpdateFileContents({
                owner,
                repo: repoName,
                path: 'CNAME',
                message: `Update custom domain to ${customDomain}`,
                content: cnameContent,
                sha: existingFile.sha
            });
            console.log(`   ✅ CNAME file updated`);
        } catch (err) {
            // File doesn't exist, create it
            await octokit.repos.createOrUpdateFileContents({
                owner,
                repo: repoName,
                path: 'CNAME',
                message: `Add custom domain ${customDomain}`,
                content: cnameContent
            });
            console.log(`   ✅ CNAME file created`);
        }

        // Wait for GitHub to process the CNAME file
        console.log(`   ⏳ Waiting 5 seconds for GitHub to process...`);
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Update GitHub Pages settings
        try {
            await octokit.repos.updateInformationAboutPagesSite({
                owner,
                repo: repoName,
                cname: customDomain
            });
            console.log(`   ✅ Pages settings updated`);
        } catch (pagesErr) {
            // This might fail if Pages isn't fully enabled yet, but CNAME file is enough
            console.log(`   ⚠️ Could not update Pages settings (CNAME file is sufficient)`);
        }

        console.log(`   ✅ SUCCESS! GitHub Pages configured`);

        return {
            success: true,
            domain: customDomain,
            repoName: repoName,
            cnameFileCreated: true
        };

    } catch (error) {
        console.error(`   ❌ FAILED:`, error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Master Function: Complete Domain Setup Workflow
 * 
 * This orchestrates all 3 steps above in the correct order:
 * 1. Register domain with Namecheap
 * 2. Configure DNS records
 * 3. Add custom domain to GitHub Pages
 * 4. Update Firestore with domain info
 * 5. Create renewal tracking record
 * 
 * @param {Object} projectData - Project data from Firestore
 * @param {Object} db - Firestore database instance
 * @returns {Object} - { success, domain, domainID, renewalDate, renewalPrice } or { success: false, error }
 */
export async function setupDomainForClient(projectData, db) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🌐 AUTOMATED DOMAIN SETUP WORKFLOW`);
    console.log(`${'='.repeat(60)}`);
    console.log(`Domain: ${projectData.selectedDomain}`);
    console.log(`Client: ${projectData.email} (${projectData.businessName})`);
    console.log(`Repository: ${projectData.repoName}`);
    console.log(`${'='.repeat(60)}\n`);

    try {
        // Validation: Check we have all required data
        if (!projectData.selectedDomain || projectData.selectedDomain === 'N/A') {
            throw new Error('No domain selected');
        }

        if (!projectData.repoName) {
            throw new Error('Repository name not found - website must be generated first');
        }

        // STEP 1: Register Domain
        const registrationResult = await registerDomainForClient(
            projectData.selectedDomain,
            projectData.email,
            projectData.businessName
        );

        if (!registrationResult.success) {
            throw new Error(`Registration failed: ${registrationResult.error}`);
        }

        // Wait for Namecheap to propagate the registration
        console.log(`\n⏳ Waiting 10 seconds for registration to propagate...`);
        await new Promise(resolve => setTimeout(resolve, 10000));

        // STEP 2: Configure DNS
        const dnsResult = await configureDNSForGitHubPages(
            projectData.selectedDomain,
            process.env.GIT_USERNAME
        );

        if (!dnsResult.success) {
            console.warn(`\n⚠️ DNS configuration failed but continuing...`);
            console.warn(`   You can configure DNS manually in Namecheap`);
        }

        // STEP 3: Configure GitHub Pages
        const githubResult = await addCustomDomainToGitHubPages(
            projectData.repoName,
            projectData.selectedDomain
        );

        if (!githubResult.success) {
            console.warn(`\n⚠️ GitHub configuration failed but continuing...`);
            console.warn(`   You can add CNAME file manually`);
        }

        // STEP 4: Update Project in Firestore
        console.log(`\n💾 STEP 4: Updating project record in Firestore`);
        const projectRef = db.collection('projects').doc(projectData.projectId);

        await projectRef.update({
            customDomain: projectData.selectedDomain,
            domainRegistered: true,
            domainRegistrationDate: new Date(),
            domainID: registrationResult.domainID,
            domainRegisteredUnder: process.env.DOMAIN_REGISTRANT_EMAIL,
            dnsConfigured: dnsResult.success,
            githubDomainConfigured: githubResult.success,
            domainSetupStatus: 'completed',
            domainRenewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
            domainRenewalPrice: projectData.domainPricing?.renewalCost || 14.99,
            domainRenewalReminder: false
        });

        console.log(`   ✅ Project record updated`);

        // STEP 5: Create Renewal Tracking Record
        console.log(`\n📅 STEP 5: Creating renewal tracking record`);
        await db.collection('domainRenewals').add({
            domain: projectData.selectedDomain,
            domainID: registrationResult.domainID,
            projectId: projectData.projectId,
            clientEmail: projectData.email,
            clientBusinessName: projectData.businessName,
            registeredDate: new Date(),
            renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            renewalPrice: projectData.domainPricing?.renewalCost || 14.99,
            autoRenew: false,
            renewalNotificationSent: false,
            status: 'active'
        });

        console.log(`   ✅ Renewal tracker created`);

        // Success summary
        console.log(`\n${'='.repeat(60)}`);
        console.log(`🎉 DOMAIN SETUP COMPLETE`);
        console.log(`${'='.repeat(60)}`);
        console.log(`✅ Domain: ${projectData.selectedDomain}`);
        console.log(`✅ Registered under: ${process.env.DOMAIN_REGISTRANT_EMAIL}`);
        console.log(`✅ Client: ${projectData.email}`);
        console.log(`⏰ Renewal due: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}`);
        console.log(`💰 Renewal price: $${projectData.domainPricing?.renewalCost || 14.99}`);
        console.log(`🌍 Will be live at: https://${projectData.selectedDomain} (after DNS propagation)`);
        console.log(`${'='.repeat(60)}\n`);

        return {
            success: true,
            domain: projectData.selectedDomain,
            domainID: registrationResult.domainID,
            renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            renewalPrice: projectData.domainPricing?.renewalCost || 14.99,
            message: 'Domain registered and configured successfully'
        };

    } catch (error) {
        console.error(`\n${'='.repeat(60)}`);
        console.error(`❌ DOMAIN SETUP FAILED`);
        console.error(`${'='.repeat(60)}`);
        console.error(`Error: ${error.message}`);
        console.error(`${'='.repeat(60)}\n`);

        // Update project with error status
        try {
            const projectRef = db.collection('projects').doc(projectData.projectId);
            await projectRef.update({
                domainSetupStatus: 'failed',
                domainSetupError: error.message,
                domainSetupFailedAt: new Date()
            });
        } catch (updateErr) {
            console.error('Could not update error status:', updateErr);
        }

        return {
            success: false,
            error: error.message
        };
    }
}