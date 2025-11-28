// ============================================
// GOOGLE DRIVE DASHBOARD FUNCTIONS
// frontend/scripts/driveUI.js
// ============================================

import { auth } from '/frontend/scripts/config.js';
import { onAuthStateChanged } from './config.js';
import { ENDPOINTS } from '/frontend/scripts/config.js';

// Get API URL from config or default
const API_URL = ENDPOINTS?.apiUrl ||
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://api.holysmokas.com');

let currentUserId = null;
let currentProjectId = null;

// Listen for auth state and check Drive status
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUserId = user.uid;
        window.currentUserId = user.uid; // Make globally available
        console.log('🔐 DriveUI: User authenticated:', user.uid);
        await checkDriveStatus();
    } else {
        currentUserId = null;
        updateDriveUI({ connected: false });
    }
});

// Check for Drive connection status
async function checkDriveStatus() {
    if (!currentUserId) {
        console.log('⚠️ DriveUI: No user ID, skipping status check');
        updateDriveUI({ connected: false });
        return;
    }

    try {
        console.log('🔍 Checking Drive status for user:', currentUserId);
        const response = await fetch(`${API_URL}/api/drive/status?userId=${currentUserId}`);
        const data = await response.json();

        console.log('📡 Drive status response:', data);

        if (data.success) {
            updateDriveUI(data);
        } else {
            updateDriveUI({ connected: false });
        }
    } catch (error) {
        console.error('Error checking Drive status:', error);
        updateDriveUI({ connected: false, error: error.message });
    }
}

// Update the Drive section UI based on connection status
function updateDriveUI(driveStatus) {
    const driveSection = document.getElementById('driveSection');
    if (!driveSection) {
        console.warn('⚠️ DriveUI: #driveSection element not found');
        return;
    }

    if (driveStatus.connected) {
        driveSection.innerHTML = `
            <div class="drive-connected">
                <div class="drive-header">
                    <span class="drive-icon">✅</span>
                    <h4>Google Drive Connected</h4>
                </div>
                <div class="drive-info">
                    <p><strong>Account:</strong> ${driveStatus.email || 'Connected'}</p>
                    <div class="storage-bar-container">
                        <div class="storage-bar">
                            <div class="storage-used" style="width: ${driveStatus.storage?.percentUsed || 0}%"></div>
                        </div>
                        <p class="storage-text">
                            ${driveStatus.storage?.usedGB || '0'} GB / ${driveStatus.storage?.totalGB || '15'} GB used
                        </p>
                    </div>
                    ${driveStatus.folderLink ? `
                        <a href="${driveStatus.folderLink}" target="_blank" class="btn btn-sm btn-outline" style="margin-top: 0.75rem; font-size: 0.85rem;">
                            📁 Open in Drive
                        </a>
                    ` : ''}
                </div>
                <button onclick="window.disconnectDrive()" class="btn-disconnect">
                    Disconnect
                </button>
            </div>
        `;
    } else {
        driveSection.innerHTML = `
            <div class="drive-not-connected">
                <div class="drive-promo">
                    <p style="margin-bottom: 1rem; color: #4b5563;">
                        Store product images in <strong>your own Google Drive</strong> — no monthly storage fees!
                    </p>
                    <ul class="drive-benefits">
                        <li>✅ 15GB free storage</li>
                        <li>✅ You own your files</li>
                        <li>✅ No extra fees</li>
                    </ul>
                </div>
                <button onclick="window.connectDrive()" class="btn btn-primary btn-connect-drive">
                    🔗 Connect Google Drive
                </button>
                <p class="drive-note">
                    We only access files created for your website.
                </p>
            </div>
        `;
    }
}

// Start Google Drive OAuth flow
window.connectDrive = function () {
    if (!currentUserId) {
        alert('Please log in first');
        return;
    }

    const projectId = currentProjectId || 'none';

    console.log('🔗 Starting Drive OAuth flow...');
    console.log('   User ID:', currentUserId);
    console.log('   Project ID:', projectId);

    // Redirect to OAuth
    window.location.href = `${API_URL}/auth/google/drive/connect?userId=${currentUserId}&projectId=${projectId}`;
};

// Disconnect Google Drive
window.disconnectDrive = async function () {
    if (!confirm('Are you sure you want to disconnect Google Drive? Your uploaded images will still work.')) {
        return;
    }

    if (!currentUserId) {
        alert('Please log in first');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/drive/disconnect`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUserId })
        });

        const data = await response.json();

        if (data.success) {
            showNotification('Google Drive disconnected successfully', 'success');
            await checkDriveStatus(); // Refresh UI
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        console.error('Error disconnecting Drive:', error);
        alert('Failed to disconnect Google Drive');
    }
};

// Upload product image
window.uploadProductImage = async function (file, productId, productName) {
    if (!currentUserId) {
        throw new Error('Please log in first');
    }

    if (!currentProjectId) {
        throw new Error('No project selected');
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', currentUserId);
    formData.append('projectId', currentProjectId);
    formData.append('productId', productId);
    formData.append('productName', productName);

    const response = await fetch(`${API_URL}/api/upload-product-image`, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    if (!data.success) {
        if (data.needsConnection) {
            if (confirm('You need to connect Google Drive to upload images. Connect now?')) {
                window.connectDrive();
            }
            throw new Error('Drive not connected');
        }
        throw new Error(data.error);
    }

    return data;
};

// Set current project (called from dashboardLogic when user selects a project)
window.setCurrentProject = function (projectId) {
    currentProjectId = projectId;
    window.currentProjectId = projectId;
};

// Check URL params for OAuth callback status
function checkDriveCallbackStatus() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('drive_connected') === 'true') {
        showNotification('✅ Google Drive connected successfully!', 'success');
        // Clean URL
        window.history.replaceState({}, '', window.location.pathname);
    }

    if (urlParams.get('drive_error')) {
        const error = urlParams.get('drive_error');
        showNotification('❌ Drive connection failed: ' + decodeURIComponent(error), 'error');
        window.history.replaceState({}, '', window.location.pathname);
    }
}

// Simple notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.drive-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `drive-notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add CSS for Drive UI
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .drive-connected, .drive-not-connected {
        background: white;
        border-radius: 12px;
        padding: 1.25rem;
        border: 1px solid #e5e7eb;
    }
    
    .drive-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .drive-icon {
        font-size: 1.25rem;
    }
    
    .drive-header h4 {
        margin: 0;
        color: #1f2937;
        font-size: 1rem;
    }
    
    .drive-info p {
        margin: 0.5rem 0;
        font-size: 0.9rem;
        color: #4b5563;
    }
    
    .drive-benefits {
        list-style: none;
        padding: 0;
        margin: 0.75rem 0;
    }
    
    .drive-benefits li {
        padding: 0.35rem 0;
        color: #4b5563;
        font-size: 0.9rem;
    }
    
    .storage-bar-container {
        margin: 0.75rem 0;
    }
    
    .storage-bar {
        background: #e5e7eb;
        border-radius: 9999px;
        height: 8px;
        overflow: hidden;
    }
    
    .storage-used {
        background: linear-gradient(90deg, #10b981, #059669);
        height: 100%;
        border-radius: 9999px;
        transition: width 0.3s ease;
    }
    
    .storage-text {
        font-size: 0.8rem !important;
        color: #6b7280 !important;
        margin-top: 0.35rem !important;
    }
    
    .btn-connect-drive {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    
    .btn-disconnect {
        background: #fee2e2;
        color: #dc2626;
        border: none;
        padding: 0.4rem 0.75rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 0.75rem;
        font-size: 0.8rem;
        width: 100%;
    }
    
    .btn-disconnect:hover {
        background: #fecaca;
    }
    
    .drive-note {
        font-size: 0.75rem !important;
        color: #9ca3af !important;
        margin-top: 0.75rem !important;
        text-align: center;
    }
    
    .btn-sm {
        padding: 0.4rem 0.75rem !important;
        font-size: 0.85rem !important;
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DriveUI: Initialized');
    checkDriveCallbackStatus();
});

// Export for use
window.checkDriveStatus = checkDriveStatus;