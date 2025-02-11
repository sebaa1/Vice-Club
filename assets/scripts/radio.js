document.addEventListener('DOMContentLoaded', () => {
    const audioElements = document.querySelectorAll('.song');
    const progressBar = document.getElementById('progressBar');
    const progressThumb = document.getElementById('progressThumb');
    const progressBarContainer = document.getElementById('progressBarContainer');
    const nowPlaying = document.getElementById('nowPlaying'); // Footer
    const playingImage = document.getElementById('playingImage');
    const playingTitle = document.getElementById('playingTitle');
    const playImages = document.querySelectorAll('.portada');
    const timeCurrent = document.getElementById('timeCurrent');

    let currentAudio = null;

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
    
        if (hours > 0) {
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        } else {
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
    }

    function updateProgressBar() {
        if (currentAudio && currentAudio.duration > 0) {
            const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            progressThumb.style.left = `${progress}%`;

            // Actualizar tiempo transcurrido
            timeCurrent.textContent = formatTime(currentAudio.currentTime);
        }
    }

    audioElements.forEach(audio => {
        audio.addEventListener('timeupdate', updateProgressBar);
        audio.addEventListener('ended', () => {
            progressBar.style.width = '0%';
            progressThumb.style.left = '0%';
            timeCurrent.textContent = "0:00";

            // Ocultar el footer solo si no hay ninguna canción reproduciéndose
            const isAnyPlaying = Array.from(audioElements).some(a => !a.paused);
            if (!isAnyPlaying) {
                nowPlaying.classList.add('hidden');
            }
        });
    });

    progressBarContainer.addEventListener('click', (event) => {
        if (!currentAudio) return;

        const rect = progressBarContainer.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;

        currentAudio.currentTime = percentage * currentAudio.duration;
        updateProgressBar();
    });

    playImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            const selectedAudio = audioElements[index];

            // Si la misma canción está sonando, pausarla
            if (currentAudio === selectedAudio && !selectedAudio.paused) {
                selectedAudio.pause();
                nowPlaying.classList.add('hidden');
                return;
            }

            // Pausar todas las demás canciones
            audioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });

            selectedAudio.play();
            currentAudio = selectedAudio;

            // Mostrar el footer con la imagen y título correctos
            nowPlaying.classList.remove('hidden');
            playingImage.src = image.src;
            playingTitle.textContent = `Reproduciendo: ${image.alt}`;

            });
        });
    });