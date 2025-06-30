document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const openUndanganBtn = document.getElementById('open-undangan-btn');
    const mainContent = document.getElementById('main-content');
    const countdownElement = document.getElementById('countdown');
    const sections = document.querySelectorAll('.section-item'); // Pilih section yang ingin diberi efek pop-up

    // --- 1. Fungsi Buka Undangan & Background ---
    openUndanganBtn.addEventListener('click', () => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        // Auto-scroll ke bagian beranda setelah undangan dibuka
        document.getElementById('beranda').scrollIntoView({ behavior: 'smooth' });
    });

    // --- 2. Countdown Timer ---
    // Ganti dengan tanggal pernikahanmu: Tahun, Bulan (0-11), Tanggal, Jam, Menit, Detik
    const weddingDate = new Date('2025-12-31T10:00:00').getTime(); // Contoh: 31 Desember 2025, jam 10 pagi

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '✨ Hari Bahagia Kami! ✨';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            ${days} <small>Hari</small> :
            ${hours} <small>Jam</small> :
            ${minutes} <small>Menit</small> :
            ${seconds} <small>Detik</small>
        `;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Panggil sekali saat dimuat untuk menghindari delay awal

    // --- 3. Efek Pop-up Saat Scroll ---
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat, aktifkan efek
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // observer.unobserve(entry.target); // Opsional: Hentikan observasi setelah terlihat
            } else {
                // Opsional: Hilangkan kelas 'show' jika elemen keluar dari viewport
                // entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- 4. Kolom Ucapan Langsung ke WhatsApp ---
    window.kirimUcapan = function() {
        const ucapanTextarea = document.getElementById('isi-ucapan');
        const ucapan = ucapanTextarea.value.trim();

        if (ucapan === "") {
            alert("Mohon tuliskan ucapan Anda terlebih dahulu.");
            return;
        }

        // Ganti dengan nomor WhatsApp kamu (format internasional, tanpa tanda '+')
        const whatsappNumber = '081914477668'; // Contoh: 6281234567890

        const encodedUcapan = encodeURIComponent(`Ucapan dari Undangan:\n"${ucapan}"`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedUcapan}`;

        window.open(whatsappLink, '_blank');
        ucapanTextarea.value = ''; // Kosongkan textarea setelah mengirim
        alert("Ucapan Anda akan dikirimkan via WhatsApp. Terima kasih!");
    };

    // --- Smooth Scroll untuk Navigasi (Dihilangkan karena tidak ada menu navigasi) ---
    // Baris ini dihapus atau dikomentari karena tidak ada lagi elemen nav a
    /*
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    */
});
