const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email === 'your_email@example.com' && password === 'your_password') {
        
        alert('Login successful!');
    } else {
        
        alert('Invalid email or password.');
    }
});

const facebookBtn = document.querySelector('.facebook');
facebookBtn.addEventListener('click', () => {
    
    console.log('Facebook login button clicked');
});

const googleBtn = document.querySelector('.google');
googleBtn.addEventListener('click', () => {
    
    console.log('Google login button clicked');
});