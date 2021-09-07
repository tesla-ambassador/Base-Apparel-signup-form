let email = document.querySelector('.email-input');
let errors = document.querySelectorAll('.error');

// This is the function to validate the email.
const valEmail = () => {
    if (!email.value.includes('@')) {
        email.style.borderColor = 'hsl(0, 93%, 68%)';
        errors.forEach(error => error.classList.add('show'));
        setTimeout(() => errors.forEach(error => error.classList.remove('show')), 3000);
    }
    else {
        email.style.borderColor = 'hsl(0, 36%, 70%)';
        errors.forEach(error => error.classList.remove('show'));
        window.location.reload();
    }
};


