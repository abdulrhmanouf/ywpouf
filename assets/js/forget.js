document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Here you would typically send the email to your backend
    // For example, using fetch API to send a POST request
    fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'أرسلنا لك رسالة لإعادة تعيين الرقم السري ، من فضلك تأكد من الايميل الخاص بك';
        } else {
            document.getElementById('message').textContent = 'خطأ: ' + data.message;
        }
    })
    .catch(error => {
        document.getElementById('message').textContent = 'هناك خطأ ، من فضلك أعد مرة أخري';
    });
});
const body = document.body;
let position = 0;

function animateBackground() {
    position++;
    body.style.backgroundPosition = `${position}px ${position}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();