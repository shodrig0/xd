document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById('video');
    let reproducirBtn = document.getElementById('reproducirBtn');
    let textoRotado = document.getElementById('textoRotado');

    reproducirBtn.addEventListener('click', function() {
        if (video.paused) {
            video.style.display = 'block'; // Muestra el video al reproducir
            video.play();
            reproducirBtn.classList.remove('bi-play');
            reproducirBtn.classList.add('bi-pause');
            textoRotado.style.display = 'none';
        } else {
            video.pause();
            reproducirBtn.classList.remove('bi-pause');
            reproducirBtn.classList.add('bi-play');
            textoRotado.style.display = 'block';
        }
    });

    video.addEventListener('pause', function() {
        video.style.display = 'none';
        textoRotado.style.display = 'block';
        reproducirBtn.classList.remove('bi-pause');
        reproducirBtn.classList.add('bi-play');
    });

    video.addEventListener('play', function() {
        video.style.display = 'block';
        textoRotado.style.display = 'none';
        reproducirBtn.classList.remove('bi-play');
        reproducirBtn.classList.add('bi-pause');
    });
});