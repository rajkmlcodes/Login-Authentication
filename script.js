// Sample user data stored in a JSON object
const users = [
    { username: 'rajkml', password: '121' },
    { username: 'raushan', password: '122' },
    { username: 'shanu', password: '123' },
];

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the username and password match any user in the JSON data
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Successful login
            loginError.textContent = '';
            alert('Login successful! Welcome, ' + username);
        } else {
            // Display login error
            loginError.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
