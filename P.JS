// Link Google Sheets Anda (Isi Link CSV di sini)
const SHEET_CSV_URL = 'PASTE_LINK_CSV_DI_SINI';

async function loadWarta() {
    const container = document.getElementById('warta-container');
    try {
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        const rows = data.split('\n').slice(1);
        if (rows.length > 0 && rows[0].trim() !== "") {
            container.innerHTML = "";
            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length >= 4) {
                    container.innerHTML += `
                        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                            <img src="${cols[3].trim()}" class="w-full h-48 object-cover">
                            <div class="p-6 text-left">
                                <span class="text-[10px] font-bold text-emerald-800">${cols[1]}</span>
                                <h4 class="serif-title text-lg my-2">${cols[0]}</h4>
                                <p class="text-gray-500 text-xs">${cols[2]}</p>
                            </div>
                        </div>`;
                }
            });
        }
    } catch (e) { console.log(e); }
}

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

document.addEventListener('DOMContentLoaded', loadWarta);
