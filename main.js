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

        // Here you would typically send the data to a server
        console.log('Dane formularza:', formData);
        alert('Dziękujemy za rejestrację! Wkrótce otrzymasz dalsze instrukcje na podany adres email.');
        form.reset();
    });
});
