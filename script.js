// script.js

// Menangani pengiriman form feedback
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form secara default
            
            const name = document.getElementById('name').value;
            const feedback = document.getElementById('feedback').value;

            // Menampilkan alert sebagai konfirmasi
            alert(`Terima kasih, ${name}! Feedback Anda telah diterima:\n"${feedback}"`);
            
            // Reset form setelah pengiriman
            form.reset();
        });
    }
});