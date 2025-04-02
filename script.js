document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');
    const packageSelect = document.getElementById('package');
    const registrationForm = document.getElementById('registrationForm');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const packageName = button.dataset.package;
            packageSelect.value = packageName;
            registrationForm.scrollIntoView({ behavior: 'smooth' });
        });
    });

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            package: document.getElementById('package').value
        };

        // Walidacja adresu email (musi być Gmail)
        if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
            alert('Proszę podać prawidłowy adres Gmail');
            return;
        }

        // Tutaj możesz dodać kod do wysyłania danych na serwer
        alert(`Dziękujemy za rejestrację!\n\nImię i nazwisko: ${formData.fullName}\nEmail: ${formData.email}\nWybrany pakiet: ${formData.package}\n\nInstrukcje dotyczące płatności zostaną wysłane na podany adres email.`);
        registrationForm.reset();
    });
});
