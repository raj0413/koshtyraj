// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Simulate submission process (You can replace this with your actual submission code)
        setTimeout(function () {
            showSuccessToast();
        }, 1000);
    });

    function showSuccessToast() {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = 'Message sent successfully!';
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.style.display = 'none';
        }, 3000);
    }
});
