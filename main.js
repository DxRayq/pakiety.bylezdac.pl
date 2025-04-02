document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            fullName: form.fullName.value,
            email: form.email.value,
            package: form.package.value
        };

        // Validate email is a Google account
        if (!formData.email.toLowerCase().includes('@gmail.com')) {
            alert('Proszę podać adres email Google (@gmail.com)');
            return;
        }
    });
});
