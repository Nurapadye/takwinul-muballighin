// Elemen-elemen yang dibutuhkan
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Fungsi Buka Menu
openMenu.onclick = () => {
    mobileMenu.classList.add('active');
};

// Fungsi Tutup Menu
closeMenu.onclick = () => {
    mobileMenu.classList.remove('active');
};

// Tutup menu otomatis saat link diklik (untuk mobile)
mobileLinks.forEach(link => {
    link.onclick = () => {
        mobileMenu.classList.remove('active');
    };
});

// Efek Navbar saat Scroll
window.onscroll = () => {
    if (window.scrollY > 50) {
        mainNav.classList.add('nav-scrolled', 'py-2');
        mainNav.classList.remove('py-3', 'md:py-4');
    } else {
        mainNav.classList.remove('nav-scrolled', 'py-2');
        mainNav.classList.add('py-3', 'md:py-4');
    }
};