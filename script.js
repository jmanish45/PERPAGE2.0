// Initialize Lucide icons
lucide.createIcons();

// Authentication redirects
function redirectToAuth() {
    window.location.href = 'customer-auth.html';
}

function redirectToWriterAuth() {
    window.location.href = 'writer-auth.html';
}

// Learn More
function showLearnMore() {
    window.location.href = 'info.html';
}

// Writer Application
function showWriterApplication() {
    const authForm = document.getElementById('writerAuthForm');
    const applicationForm = document.getElementById('writerApplication');
    
    if (authForm && applicationForm) {
        authForm.style.display = 'none';
        applicationForm.style.display = 'block';
    }
}

function handleWriterApplication(event) {
    event.preventDefault();
    // Handle writer application submission
    // Redirect to writer dashboard after successful application
    window.location.href = 'writer-dashboard.html';
}

// Customer Authentication
function handleCustomerAuth(event) {
    event.preventDefault();
    // Handle customer authentication
    window.location.href = 'customer-dashboard.html';
}

// Writer Authentication
function handleWriterAuth(event) {
    event.preventDefault();
    // Handle writer authentication
    window.location.href = 'writer-dashboard.html';
}

// Google Sign In
function signInWithGoogle() {
    // Implement Google Sign In logic
    alert('Google Sign In will be implemented here');
}

// Toggle between Sign In and Sign Up for customers
function toggleAuthMode() {
    const form = document.getElementById('authForm');
    const heading = document.querySelector('.auth-box h2');
    const toggleText = document.querySelector('.auth-toggle');
    
    if (heading.textContent === 'Sign In to PerPage') {
        heading.textContent = 'Create Your Account';
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuthMode()">Sign In</a>';
        // Add additional fields for sign up
        const usernameGroup = document.querySelector('.form-group');
        const newFields = `
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile Number</label>
                <input type="tel" id="mobile" required>
            </div>
        `;
        usernameGroup.insertAdjacentHTML('afterend', newFields);
    } else {
        heading.textContent = 'Sign In to PerPage';
        toggleText.innerHTML = 'New to PerPage? <a href="#" onclick="toggleAuthMode()">Create an Account</a>';
        // Remove additional fields
        const additionalFields = document.querySelectorAll('.form-group');
        additionalFields.forEach((field, index) => {
            if (index !== 0 && index !== 1) {
                field.remove();
            }
        });
    }
}