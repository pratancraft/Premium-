// Ganti foto: klik tombol "Ganti foto" di atas foto, lalu pilih gambar dari perangkat.
document.querySelectorAll('.photo-input').forEach((input) => {
  input.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Silakan pilih file gambar seperti JPG, PNG, atau WEBP.');
      return;
    }
    const image = event.target.closest('.photo-frame').querySelector('.editable-photo');
    const reader = new FileReader();
    reader.onload = () => { image.src = reader.result; };
    reader.readAsDataURL(file);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const opened = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.textContent = opened ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

// Ubah nomor WhatsApp di index.html pada href="https://wa.me/6281234567890".
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 500));
backTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();
