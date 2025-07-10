// --- 1. Seleksi Semua Elemen ---
// Memilih elemen-elemen dari HTML dan menyimpannya dalam variabel
// agar mudah diakses nanti.
const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Memilih semua elemen pesan error sekaligus
const errorMessages = document.querySelectorAll('.error-message');
const successMessage = document.getElementById('success-message');

// --- 2. Tambahkan Event Listener pada Form ---
// Kita mendengarkan event 'submit', bukan 'click' pada tombol,
// agar semua cara pengiriman form (klik atau enter) bisa ditangani.
form.addEventListener('submit', function(event) {

  // --- 3. Cegah Perilaku Default Form ---
  // Ini adalah baris paling PENTING.
  // Mencegah browser mengirim form dan me-reload halaman.
  event.preventDefault();

  // --- Reset Tampilan Sebelum Validasi ---
  // Sembunyikan semua pesan error dan pesan sukses dari percobaan sebelumnya.
  errorMessages.forEach(msg => msg.style.display = 'none');
  successMessage.style.display = 'none';

  // Hapus border merah dari semua input.
  usernameInput.classList.remove('input-error');
  emailInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');

  // Variabel penanda. Kita anggap form valid sampai terbukti salah.
  let isValid = true;

  // --- 4. Logika Validasi ---

  // Validasi Username
  if (usernameInput.value.trim() === '') {
    const errorMsg = usernameInput.nextElementSibling; // Mengambil elemen <small> setelah input
    errorMsg.style.display = 'block';
    usernameInput.classList.add('input-error');
    isValid = false; // Form terbukti tidak valid
  }

  // Validasi Email (harus mengandung '@' dan '.')
  if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    const errorMsg = emailInput.nextElementSibling;
    errorMsg.style.display = 'block';
    emailInput.classList.add('input-error');
    isValid = false; // Form terbukti tidak valid
  }

  // Validasi Password (minimal 8 karakter)
  if (passwordInput.value.length < 8) {
    const errorMsg = passwordInput.nextElementSibling;
    errorMsg.style.display = 'block';
    passwordInput.classList.add('input-error');
    isValid = false; // Form terbukti tidak valid
  }

  // --- 5. Tampilkan Pesan Sukses Jika Semua Valid ---
  // Kode ini hanya akan berjalan jika tidak ada satupun validasi di atas yang gagal.
  if (isValid) {
    successMessage.style.display = 'block';
    form.reset(); // Mengosongkan semua input field setelah sukses
  }
});




