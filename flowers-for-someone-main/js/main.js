onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Bunga buat Sucii').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// --- TAMBAHAN KODE UNTUK MUSIK ---

// Fungsi untuk memutar musik
function playMusic() {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play();
  }
  
  // Hapus deteksi klik setelah lagu nyala biar nggak error/dobel
  window.removeEventListener('click', playMusic);
  window.removeEventListener('touchstart', playMusic);
}

// Deteksi klik (laptop) atau sentuhan (HP) pertama kali di layar
window.addEventListener('click', playMusic);
window.addEventListener('touchstart', playMusic);