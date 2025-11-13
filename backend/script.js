
// Page navigation
function showPage(page) {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('login-page').classList.add('hidden');

    document.getElementById(page + '-page').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Form handlers (stored in memory - no localStorage)
const users = [];

function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        timestamp: new Date().toISOString()
    };
    users.push(userData);
    alert('Thank you! We\'ll contact you within 24 hours to discuss your project. Remember - just one payment, no monthly fees!');
    showPage('home');
}

function handleLogin(e) {
    e.preventDefault();
    alert('Login functionality ready for backend integration!');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('onclick')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
