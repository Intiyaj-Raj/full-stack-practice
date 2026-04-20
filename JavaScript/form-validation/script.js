
function showError(element, message) {
    const error = element.parentNode.querySelector('.error');
    const success = element.parentNode.querySelector('.success');
    error.textContent = message;
    error.classList.add('show');
    success.classList.remove('show');
    element.style.borderColor = '#e74c3c';
}

function showSuccess(element, message) {
    const error = element.parentNode.querySelector('.error');
    const success = element.parentNode.querySelector('.success');
    success.textContent = message;
    success.classList.add('show');
    error.classList.remove('show');
    element.style.borderColor = '#27ae60';
}

function clearValidation(element) {
    const error = element.parentNode ? element.parentNode.querySelector('.error') : null;
    const success = element.parentNode ? element.parentNode.querySelector('.success') : null;
    if (error) error.classList.remove('show');
    if (success) success.classList.remove('show');
    element.style.borderColor = '#e1e5e9';
}

// Field validations
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 1;
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone.replace(/\D/g, ''));
}



// Event listeners
document.getElementById('fullName').addEventListener('blur', function () {
    const value = this.value;
    if (value === '') {
        showError(this, 'Full name is required');
    } else if (!validateName(value)) {
        showError(this, 'Name must be at least 2 characters');
    } else {
        showSuccess(this, 'Name is valid!');
    }
});

document.getElementById('email').addEventListener('blur', function () {
    const value = this.value;
    if (value === '') {
        showError(this, 'Email is required');
    } else if (!validateEmail(value)) {
        showError(this, 'Please enter a valid email');
    } else {
        showSuccess(this, 'Email is valid!');
    }
});

document.getElementById('password').addEventListener('blur', function () {
    const value = this.value;
    if (value === '') {
        showError(this, 'Password is required');
    } else if (!validatePassword(value)) {
        showError(this, 'Password too short');
    } else {
        showSuccess(this, 'Password valid!');
    }
});

document.getElementById('confirmPassword').addEventListener('blur', function () {
    const pass = document.getElementById('password').value;
    const value = this.value;
    if (value === '') {
        showError(this, 'Confirm password is required');
    } else if (value !== pass) {
        showError(this, 'Passwords do not match');
    } else {
        showSuccess(this, 'Passwords match!');
    }
});

document.getElementById('phone').addEventListener('blur', function () {
    const value = this.value;
    if (value === '') {
        showError(this, 'Phone is required');
    } else if (!validatePhone(value)) {
        showError(this, 'Enter valid 10-digit phone number');
    } else {
        showSuccess(this, 'Phone is valid!');
    }
});



// Form submit
document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Quick full validation
    let isValid = true;
    const inputs = this.querySelectorAll('input[required], input[type="radio"]');

    inputs.forEach(input => {
        if (!input.validity.valid) {
            isValid = false;
            // Trigger blur to show errors
            input.blur();
        }
    });

    // Specific checks
    const password = document.getElementById('password').value;
    if (!validatePassword(password)) isValid = false;
    const confirm = document.getElementById('confirmPassword').value;
    if (confirm !== password) isValid = false;
    const phone = document.getElementById('phone').value;
    if (!validatePhone(phone)) isValid = false;


    const messageEl = document.getElementById('message');
    if (isValid) {
        const formData = new FormData(this);
        console.log('Form submitted successfully:', Object.fromEntries(formData));
        messageEl.textContent = 'Registration successful! Check console for data.';
        messageEl.className = 'message success-message';
        messageEl.classList.add('show');
        this.reset();
    } else {
        messageEl.textContent = 'Please fix the errors above.';
        messageEl.className = 'message error-message';
        messageEl.classList.add('show');
    }
});

// Input event to clear errors on typing
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => clearValidation(input));
});