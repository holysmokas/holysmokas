// authLogic.js - Authentication Logic for Login Page
import { auth } from './firebase.js';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    const currentPath = window.location.pathname;
    
    if (user && currentPath.includes('login.html')) {
        // User is logged in and on login page, redirect to dashboard
        window.location.href = '/src/frontend/pages/dashboard.html';
    } else if (!user && currentPath.includes('dashboard.html')) {
        // User is not logged in and on dashboard, redirect to login
        window.location.href = '/src/frontend/pages/login.html';
    }
});

// Login Function
window.handleLogin = async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginBtn = document.getElementById('loginBtn');
    
    // Disable button and show loading
    loginBtn.disabled = true;
    loginBtn.textContent = 'Signing In...';
    
    try {
        // Sign in with Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        console.log('Login successful:', user.email);
        
        // Show success modal
        showAuthModal('success', 'Login Successful!', 'Redirecting to your dashboard...');
        
        // Redirect to dashboard after 1 second
        setTimeout(() => {
            window.location.href = '/src/frontend/pages/dashboard.html';
        }, 1000);
        
    } catch (error) {
        console.error('Login error:', error);
        
        // Handle specific error cases
        let errorMessage = 'Login failed. Please try again.';
        
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
            errorMessage = 'Invalid email or password. Please check your credentials.';
        } else if (error.code === 'auth/user-not-found') {
            errorMessage = 'No account found with this email address.';
        } else if (error.code === 'auth/too-many-requests') {
            errorMessage = 'Too many failed login attempts. Please try again later.';
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Please enter a valid email address.';
        }
        
        // Show error modal
        showAuthModal('error', 'Login Failed', errorMessage);
        
        // Re-enable button
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In';
    }
};

// Logout Function
window.handleLogout = async function() {
    try {
        await signOut(auth);
        console.log('Logout successful');
        window.location.href = '/src/frontend/pages/login.html';
    } catch (error) {
        console.error('Logout error:', error);
        showAuthModal('error', 'Logout Error', 'Error logging out. Please try again.');
    }
};

// Modal Functions
function showAuthModal(type, title, message) {
    const modal = document.getElementById('authModal');
    const icon = document.getElementById('authIcon');
    const titleEl = document.getElementById('authTitle');
    const messageEl = document.getElementById('authMessage');
    
    if (!modal) return;
    
    // Set icon based on type
    if (type === 'success') {
        icon.textContent = '✓';
        icon.style.background = 'var(--secondary)';
    } else if (type === 'error') {
        icon.textContent = '✕';
        icon.style.background = '#ef4444';
    }
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    modal.classList.add('show');
}

window.closeAuthModal = function() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('show');
    }
};

// Admin Registration Function (Optional - for creating client accounts)
window.handleRegister = async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const registerBtn = document.getElementById('registerBtn');
    
    // Validate password
    if (password.length < 6) {
        showAuthModal('error', 'Validation Error', 'Password must be at least 6 characters long.');
        return;
    }
    
    // Disable button
    registerBtn.disabled = true;
    registerBtn.textContent = 'Creating Account...';
    
    try {
        // Create new user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        console.log('Account created:', user.email);
        
        // Update display name
        await updateProfile(user, { displayName: name });
        
        // Show success modal
        showAuthModal(
            'success', 
            'Account Created!', 
            `Account created successfully for ${email}. Password: ${password}\n\nSend these credentials to the client securely. The account is now ready to use.`
        );
        
        // Sign out the newly created user (so admin doesn't stay logged in as client)
        await signOut(auth);
        
        // Reset form
        form.reset();
        registerBtn.disabled = false;
        registerBtn.textContent = 'Create Account';
        
    } catch (error) {
        console.error('Registration error:', error);
        
        let errorMessage = 'Failed to create account. ';
        
        if (error.code === 'auth/email-already-in-use') {
            errorMessage += 'An account with this email already exists.';
        } else if (error.code === 'auth/weak-password') {
            errorMessage += 'Password should be at least 6 characters.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage += 'Invalid email address format.';
        } else {
            errorMessage += error.message;
        }
        
        showAuthModal('error', 'Registration Failed', errorMessage);
        
        registerBtn.disabled = false;
        registerBtn.textContent = 'Create Account';
    }
};

// Password Reset Function
window.handlePasswordReset = async function(email) {
    if (!email) {
        email = prompt('Enter your email address to reset password:');
        if (!email) return;
    }
    
    try {
        const { sendPasswordResetEmail } = await import('firebase/auth');
        await sendPasswordResetEmail(auth, email);
        showAuthModal('success', 'Email Sent', 'Password reset email sent! Check your inbox.');
    } catch (error) {
        console.error('Password reset error:', error);
        showAuthModal('error', 'Reset Failed', 'Failed to send reset email. Please contact support at (415) 691-7085.');
    }
};

// Auto-close modal on outside click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-overlay')) {
                closeAuthModal();
            }
        });
    }
});