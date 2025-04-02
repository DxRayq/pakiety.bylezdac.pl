document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const packageName = button.closest('.pricing-card').querySelector('h3').textContent;
            alert(`Wybrano ${packageName}. W celu opłaty skonaktuj się z admin@bylezdac.pl`);
        });
    });
});
