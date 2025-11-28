// frontend/scripts/dashboardLogic.js
// frontend/scripts/dashboardLogic.js
import { auth } from '../../frontend/scripts/config.js';
import { onAuthStateChanged } from 'firebase/auth';
import { ENDPOINTS } from '/frontend/scripts/config.js';

let currentUser = null;
let currentProject = null;

onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        await loadProjects(user.uid);
    } else {
        window.location.href = './login.html';
    }
});

// Make auth globally available for logout
window.auth = auth;

/**
 * Format modification log entry HTML
 */
function formatModificationLog(modifications, limit = 3) {
    if (!modifications || modifications.length === 0) {
        return '<p class="no-modifications">No modifications yet</p>';
    }

    const displayMods = modifications.slice(0, limit);

    return displayMods.map((mod, index) => {
        const modNumber = index + 1;
        const statusClass = mod.status === 'completed' ? 'completed' :
            mod.status === 'pending' ? 'pending' : 'failed';
        const userName = mod.userEmail || mod.userName || 'User';
        const timestamp = mod.timestamp ? new Date(mod.timestamp).toLocaleString() : 'Unknown date';

        return `
            <div class="log-entry">
                <div class="log-header">
                    <span class="log-number">#${modNumber}</span>
                    <span class="log-status ${statusClass}">${mod.status || 'completed'}</span>
                    <span class="log-date">${timestamp}</span>
                </div>
                <p class="log-prompt"><strong>Request:</strong> ${mod.request || 'No description'}</p>
                <p class="log-user">👤 Requested by: ${userName}</p>
            </div>
        `;
    }).join('');
}

async function loadProjects(userId) {
    try {
        const response = await fetch(ENDPOINTS.userProjects(userId));
        const data = await response.json();
        const container = document.getElementById('projectsContainer');

        if (data.success && data.projects.length > 0) {
            container.innerHTML = data.projects.map(project => {
                const modsUsed = project.modificationsUsed || 0;
                const modsLimit = project.modificationsLimit || 3;
                const modsRemaining = modsLimit - modsUsed;
                const canModify = modsRemaining > 0;
                const modifications = project.modifications || [];

                return `
                <div class="project-card">
                    <h3>${project.businessName}</h3>
                    <div class="project-info">
                        <p><strong>Status:</strong> <span class="project-status status-${project.status}">${project.status}</span></p>
                        <p><strong>Package:</strong> ${project.packageType}</p>
                        <p><strong>Created:</strong> ${new Date(project.createdAt.seconds * 1000).toLocaleDateString()}</p>
                        <p><strong>Modifications:</strong> 
                            <span class="${modsRemaining > 0 ? 'text-success' : 'text-warning'}">
                                ${modsUsed}/${modsLimit} used
                            </span>
                            ${modsRemaining === 0 ? '<span class="badge-limit">Limit Reached</span>' : ''}
                        </p>
                    </div>

                    ${modifications.length > 0 ? `
                    <div class="modification-log">
                        <h4>📋 Modification Log</h4>
                        ${formatModificationLog(modifications, 3)}
                        ${modifications.length > 3 ? `
                            <button onclick='viewAllModifications(${JSON.stringify(modifications).replace(/'/g, "&#39;")})' class="view-all-btn">
                                View all ${modifications.length} modifications
                            </button>
                        ` : ''}
                    </div>
                    ` : '<p class="no-modifications">No modifications yet</p>'}

                    <div class="project-btn-group">
                        <a href="${project.liveUrl}" target="_blank" class="btn btn-view">🌐 View Live Site</a>
                        
                        ${canModify ? `
                            <button 
                                onclick='openAiModificationModal(${JSON.stringify(project).replace(/'/g, "&#39;")})' 
                                class="btn btn-modify">
                                🤖 Request Modification (${modsRemaining} free left)
                            </button>
                        ` : `
                            <button 
                                onclick='openPurchaseModal(${JSON.stringify(project).replace(/'/g, "&#39;")})' 
                                class="btn btn-purchase">
                                💳 Purchase More Modifications
                            </button>
                        `}
                    </div>
                </div>
            `}).join('');
        } else {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Your projects will appear here once they're created.</p>
                    <a href="./contact.html" class="btn btn-primary">Start a New Project</a>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projectsContainer').innerHTML = `
            <div class="empty-state">
                <h3>Error loading projects</h3>
                <p>Please try refreshing the page.</p>
            </div>
        `;
    }
}

window.openAiModificationModal = function (project) {
    currentProject = project;
    const modsRemaining = (project.modificationsLimit || 3) - (project.modificationsUsed || 0);

    document.getElementById('modificationsCount').textContent = modsRemaining;
    document.getElementById('aiModificationModal').classList.add('show');
    document.getElementById('aiModificationInput').value = '';

    // Reset chat messages
    document.getElementById('aiChatMessages').innerHTML = `
        <div class="ai-message">
            <strong>AI Assistant:</strong> Hi! I can help you modify "${project.businessName}". You have ${modsRemaining} free modification${modsRemaining !== 1 ? 's' : ''} remaining. What would you like to change?
        </div>
    `;
};

window.closeAiModificationModal = function () {
    document.getElementById('aiModificationModal').classList.remove('show');
    currentProject = null;
};

window.submitAiModification = async function (event) {
    event.preventDefault();

    const input = document.getElementById('aiModificationInput');
    const request = input.value.trim();
    const submitBtn = document.getElementById('aiSubmitBtn');
    const chatMessages = document.getElementById('aiChatMessages');
    const processingMsg = document.getElementById('aiProcessingMessage');
    const inputForm = document.getElementById('aiModificationForm');

    console.log('🔍 DEBUG: submitAiModification called');
    console.log('🔍 currentUser:', currentUser);
    console.log('🔍 currentProject:', currentProject);
    console.log('🔍 request:', request);
    console.log('🔍 ENDPOINTS:', ENDPOINTS);

    if (!request || !currentProject) return;

    // Add user message to chat
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.innerHTML = `<strong>You:</strong> ${request}`;
    chatMessages.appendChild(userMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input and disable form
    input.value = '';
    submitBtn.disabled = true;
    inputForm.style.display = 'none';
    processingMsg.style.display = 'block';

    try {
        const response = await fetch(ENDPOINTS.requestModification, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.uid,
                projectId: currentProject.id,
                modificationRequest: request
            })
        });

        const data = await response.json();
        processingMsg.style.display = 'none';
        inputForm.style.display = 'block';
        submitBtn.disabled = false;

        if (data.success) {
            // Add AI response
            const aiMsg = document.createElement('div');
            aiMsg.className = 'ai-message';
            aiMsg.innerHTML = `<strong>AI Assistant:</strong> Great! I've processed your request and updated your website. The changes are being deployed now and should be live in 2-3 minutes. ${data.modificationsRemaining} free modification${data.modificationsRemaining !== 1 ? 's' : ''} remaining.`;
            chatMessages.appendChild(aiMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Update count
            document.getElementById('modificationsCount').textContent = data.modificationsRemaining;

            // Reload projects to update UI
            setTimeout(() => {
                loadProjects(currentUser.uid);
                if (data.modificationsRemaining === 0) {
                    closeAiModificationModal();
                    showResponseModal('Modifications Limit Reached', 'You\'ve used all 3 free modifications. Additional changes will require a small fee. Contact us at (415) 691-7085 to discuss pricing.');
                }
            }, 2000);

        } else {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'ai-message';
            aiMsg.innerHTML = `<strong>AI Assistant:</strong> I'm sorry, there was an error processing your request: ${data.error || 'Unknown error'}. Please try again or contact support at (415) 691-7085.`;
            chatMessages.appendChild(aiMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

    } catch (error) {
        console.error('Error submitting modification:', error);
        processingMsg.style.display = 'none';
        inputForm.style.display = 'block';
        submitBtn.disabled = false;

        const aiMsg = document.createElement('div');
        aiMsg.className = 'ai-message';
        aiMsg.innerHTML = '<strong>AI Assistant:</strong> I encountered a technical error. Please try again or contact support at (415) 691-7085.';
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};

function showResponseModal(title, message) {
    const modal = document.getElementById('responseModal');
    const content = document.getElementById('responseContent');
    content.innerHTML = `
        <h2>${title}</h2>
        <p>${message}</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `;
    modal.classList.add('show');
}

window.closeResponseModal = function () {
    document.getElementById('responseModal').classList.remove('show');
};

window.viewAllModifications = function (modifications) {
    const modal = document.getElementById('responseModal');
    const content = document.getElementById('responseContent');

    content.innerHTML = `
        <h2>📋 Complete Modification Log</h2>
        <div class="modification-log">
            ${formatModificationLog(modifications, modifications.length)}
        </div>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `;
    modal.classList.add('show');
};

window.openPurchaseModal = function (project) {
    const modal = document.getElementById('responseModal');
    const content = document.getElementById('responseContent');

    content.innerHTML = `
        <h2>💳 Purchase Additional Modifications</h2>
        <p>You've used all 3 free modifications for <strong>${project.businessName}</strong>.</p>
        
        <div class="pricing-options">
            <div class="pricing-card">
                <h3>Single Modification</h3>
                <p class="price">$49</p>
                <p>One AI-powered change to your website</p>
                <button onclick="purchaseModifications('${project.id}', 1)" class="btn btn-primary">Purchase 1 Modification</button>
            </div>
            
            <div class="pricing-card featured">
                <span class="badge-popular">Most Popular</span>
                <h3>5 Modifications Pack</h3>
                <p class="price">$199 <span class="price-save">Save $46</span></p>
                <p>Five AI-powered changes to your website</p>
                <button onclick="purchaseModifications('${project.id}', 5)" class="btn btn-primary">Purchase 5 Modifications</button>
            </div>
            
            <div class="pricing-card">
                <h3>Unlimited Monthly</h3>
                <p class="price">$299/mo</p>
                <p>Unlimited modifications for one month</p>
                <button onclick="purchaseModifications('${project.id}', 'unlimited')" class="btn btn-primary">Get Unlimited</button>
            </div>
        </div>
        
        <p class="contact-note">Need something custom? Call us at <strong>(415) 691-7085</strong></p>
        <button onclick="closeResponseModal()" class="btn btn-outline">Maybe Later</button>
    `;
    modal.classList.add('show');
};

window.purchaseModifications = async function (projectId, quantity) {
    // TODO: Integrate with Stripe payment
    console.log(`Purchase request: ${quantity} modifications for project ${projectId}`);

    // For now, show contact message
    const modal = document.getElementById('responseModal');
    const content = document.getElementById('responseContent');

    content.innerHTML = `
        <h2>💳 Complete Your Purchase</h2>
        <p>To purchase ${quantity === 'unlimited' ? 'unlimited' : quantity} modification${quantity !== 1 && quantity !== 'unlimited' ? 's' : ''}, please contact us:</p>
        <div style="text-align: center; margin: 2rem 0;">
            <p style="font-size: 1.5rem; font-weight: 700; color: #007bff;">📞 (415) 691-7085</p>
            <p>or email: <strong>support@holysmokas.com</strong></p>
        </div>
        <p>We'll process your payment and add the modifications to your account immediately.</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Got It</button>
    `;
};

// ============================================
// SUPPORT MODAL FUNCTIONS
// ============================================

window.openSupportModal = function () {
    document.getElementById('supportModal').classList.add('show');
    document.getElementById('supportSubject').value = '';
    document.getElementById('supportMessage').value = '';
    document.getElementById('supportForm').style.display = 'block';
    document.getElementById('supportProcessing').style.display = 'none';
};

window.closeSupportModal = function () {
    document.getElementById('supportModal').classList.remove('show');
};

window.submitSupportRequest = async function (event) {
    event.preventDefault();

    const subject = document.getElementById('supportSubject').value.trim();
    const message = document.getElementById('supportMessage').value.trim();
    const submitBtn = document.getElementById('supportSubmitBtn');
    const form = document.getElementById('supportForm');
    const processing = document.getElementById('supportProcessing');

    if (!subject || !message) return;

    // Show processing state
    form.style.display = 'none';
    processing.style.display = 'block';
    submitBtn.disabled = true;

    try {
        const response = await fetch(ENDPOINTS.supportRequest || `${ENDPOINTS.requestModification.replace('/request-modification', '/support-request')}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.uid,
                userEmail: currentUser.email,
                subject: subject,
                message: message,
                userName: currentUser.displayName || currentUser.email,
                timestamp: new Date().toISOString()
            })
        });

        const data = await response.json();
        processing.style.display = 'none';

        if (data.success) {
            // Show success message
            const modal = document.getElementById('supportModal');
            const modalBox = modal.querySelector('.modal-box');
            modalBox.innerHTML = `
                <button class="modal-close" onclick="closeSupportModal()">&times;</button>
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; color: #28a745; margin-bottom: 1rem;">✅</div>
                    <h2>Message Sent!</h2>
                    <p style="color: #6c757d; margin: 1rem 0;">
                        We've received your message and will get back to you shortly!
                    </p>
                    
                    <p style="color: #6c757d; margin-top: 1rem;">
                        You can also call us directly at <strong>(415) 691-7085</strong>
                    </p>
                    <button onclick="closeSupportModal()" class="btn btn-primary" style="margin-top: 1.5rem;">
                        Close
                    </button>
                </div>
            `;
        } else {
            // Show error
            form.style.display = 'block';
            submitBtn.disabled = false;
            alert('Error sending message: ' + (data.error || 'Unknown error. Please try calling us at (415) 691-7085'));
        }

    } catch (error) {
        console.error('Error submitting support request:', error);
        processing.style.display = 'none';
        form.style.display = 'block';
        submitBtn.disabled = false;
        alert('Technical error sending message. Please call us directly at (415) 691-7085');
    }
};