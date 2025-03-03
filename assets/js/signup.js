document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('كلمة المرور غير متطابقة');
        event.preventDefault();
    }
});
const body = document.body;
let position = 0;

function animateBackground() {
    position++;
    body.style.backgroundPosition = `${position}px ${position}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();