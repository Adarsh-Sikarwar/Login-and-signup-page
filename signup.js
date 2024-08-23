const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    
});