// Fungsi untuk menampilkan alert
function showAlert() {
    alert("Tombol diklik!");
}

// Menangani pengiriman form kontak
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Pesan Anda telah dikirim!");
});