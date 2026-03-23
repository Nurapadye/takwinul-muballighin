// 1. GANTI LINK INI DENGAN LINK CSV DARI GOOGLE SHEETS ANDA
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pub?output=csv';

// Fungsi Ambil Data Warta Otomatis
async function loadWarta() {
    const container = document.getElementById('warta-container');
    
    try {
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        const rows = data.split('\n').slice(1); // Ambil data saja tanpa header

        if (rows.length > 0 && rows[0].trim() !== "") {
            container.innerHTML = ""; // Bersihkan teks loading

            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length >= 4) {
                    container.innerHTML += `
                        <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                            <div class="h-56 overflow-hidden">
                                <img src="${cols[3].trim()}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">${cols[1]}</span>
                                <h4 class="serif-title text-xl text-emerald-950 mt-3 mb-4">${cols[0]}</h4>
                                <p class="text-gray-500 text-xs leading-relaxed line-clamp-3">${cols[2]}</p>
                            </div>
                        </div>
                    `;
                }
            });
        }
    } catch (error) {
        console.error("Gagal memuat warta:", error);
    }
}

// Navbar & Menu Logic
const nav = document.getElementById('main-nav');
const openM = document.getElementById('open-menu');
const closeMBtn = document.getElementById('close-menu');
const mMenu = document.getElementById('mobile-menu');

window.onscroll = () => {
    if (window.scrollY > 50) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
};

openM.onclick = () => mMenu.classList.add('active');
closeMBtn.onclick = () => mMenu.classList.remove('active');

function closeM() { mMenu.classList.remove('active'); }

// Jalankan Load Warta
document.addEventListener('DOMContentLoaded', loadWarta);
