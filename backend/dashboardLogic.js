// src/frontend/scripts/dashboardLogic.js - UPDATED
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

let currentUser = null;
let currentProjectId = null;

// Check authentication
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        await loadProjects(user.uid);
    } else {
        window.location.href = '/src/frontend/pages/login.html';
    }
});

// Load user projects
async function loadProjects(userId) {
    try {
        const response = await fetch(`http://localhost:8080/user-projects/${userId}`);
        const data = await response.json();

        const container = document.getElementById('projectsContainer');

        if (data.success && data.projects.length > 0) {
            container.innerHTML = data.projects.map(project => `
                <div class="project-card">
                    <h3>${project.businessName}</h3>
                    <div class="project-info">
                        <p><strong>Status:</strong> <span class="project-status status-${project.status}">${project.status}</span></p>
                        <p><strong>Package:</strong> ${project.packageType}</p>
                        <p><strong>Created:</strong> ${new Date(project.createdAt.seconds * 1000).toLocaleDateString()}</p>
                    </div>
                    <div class="project-actions">
                        <a href="${project.liveUrl}" target="_blank" class="project-btn btn-view">View Live Site</a>
                        <button onclick="openModificationModal('${project.id}')" class="project-btn btn-modify">Request Changes</button>
                    </div>
                </div>
            `).join('');
        } else {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Your projects will appear here once they're created.</p>
                    <a href="/src/frontend/pages/contact.html" class="btn btn-primary">Start a New Project</a>
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

// Open modification modal
window.openModificationModal = function (projectId) {
    currentProjectId = projectId;
    document.getElementById('modificationModal').classList.add('show');
};

// Close modification modal
window.closeModificationModal = function () {
    document.getElementById('modificationModal').classList.remove('show');
    document.getElementById('modificationRequest').value = '';
};

// Submit modification request
window.submitModification = async function (event) {
    event.preventDefault();

    const request = document.getElementById('modificationRequest').value;

    try {
        const response = await fetch('http://localhost:8080/request-modification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.uid,
                projectId: currentProjectId,
                modificationRequest: request
            })
        });

        const data = await response.json();

        closeModificationModal();

        if (data.success) {
            showResponseModal('Success!', 'Your modification request has been received. We\'ll update your site and notify you via email when it\'s ready!');
            await loadProjects(currentUser.uid);
        } else {
            showResponseModal('Error', 'Failed to submit modification request. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting modification:', error);
        showResponseModal('Error', 'An error occurred. Please try again later.');
    }
};

// Response modal functions
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