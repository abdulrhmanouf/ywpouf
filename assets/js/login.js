// You can add any JavaScript functionality here if needed
// For example, form validation or handling the login process

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);

    // Example: Redirect to another page after successful login
    // window.location.href = 'dashboard.html';
});

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

let username = getCookie("username");
if(username) {
}
const body = document.body;
let position = 0;

function animateBackground() {
    position++;
    body.style.backgroundPosition = `${position}px ${position}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();