// JavaScript untuk membuka undangan dan memutar musik
document.getElementById('open-invitation-btn').addEventListener('click', function() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    document.body.style.overflowY = 'scroll'; // Aktifkan scroll
    var music = document.getElementById('background-music');
    if (music) {
        music.play().catch(e => console.log("Autoplay blocked:", e)); // Coba putar musik
    }
});

// JavaScript untuk Countdown Timer
// **PENTING: TANGGAL SUDAH DISET KE 15 Agustus 2025**
const countdownDate = new Date("Aug 15, 2025 00:00:00").getTime(); 

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan angka dengan format "00" jika kurang dari 10
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Jika hitungan mundur selesai
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>Acara Telah Dimulai!</h2>";
    }
}, 1000);
