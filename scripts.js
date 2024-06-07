document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordAlert = document.getElementById('passwordAlert');

    // Clear previous alerts
    passwordAlert.style.display = 'none';
    passwordAlert.textContent = '';

    // Validate password format
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordAlert.textContent = 'Wrong combination';
        passwordAlert.style.display = 'block';
        return;
    }

    // Hardcoded credentials
    const validUsername = 'test@luxpmsoft.com';
    const validPassword = 'test1234!';

    if (username === validUsername && password === validPassword) {
        // Login successful
        window.location.href = 'blank.html'; // Redirect to blank page
    } else {
        // Show pop-up for incorrect password
        alert('The provided password is wrong');
    }
});
