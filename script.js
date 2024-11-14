function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidUsername(username) {
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    return usernamePattern.test(username);
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        const emailField = document.getElementById('email');
        const passwordField = document.getElementById('password');

        if (!isValidEmail(emailField.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        const emailField = document.getElementById('email');
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirm-password');

        if (!isValidEmail(emailField.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }

        if (!isValidUsername(usernameField.value)) {
            alert('Username must not contain special characters.');
            event.preventDefault();
        }

        if (passwordField.value !== confirmPasswordField.value) {
            alert('Passwords do not match.');
            event.preventDefault();
        }
    });
}
