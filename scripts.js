document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hide all sections
            document.querySelectorAll('#extra-sections section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show the target section
            const target = this.getAttribute('data-target');
            const targetSection = document.getElementById(target);
            targetSection.classList.remove('hidden');
            
            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-game-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate form submission process (e.g., send to server)
        setTimeout(function() {
            form.reset(); // Reset form fields
            confirmationMessage.classList.remove('hidden'); // Show confirmation message
        }, 500); // Simulate network delay
    });
});
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
});

document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
});
