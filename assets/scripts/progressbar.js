const audioElements = document.querySelectorAll('audio');
        const progressBar = document.getElementById('progressBar');
        const progressBarContainer = document.getElementById('progressBarContainer');

        audioElements.forEach(audio => {
            audio.addEventListener('play', () => {
                document.getElementById('nowPlaying').classList.remove('hidden');
                updateProgressBar(audio);
            });

            audio.addEventListener('pause', () => {
                document.getElementById('nowPlaying').classList.add('hidden');
            });

            audio.addEventListener('timeupdate', () => {
                updateProgressBar(audio);
            });
        });

        function updateProgressBar(audio) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';
        }

        const playImage = document.querySelectorAll('portada');
        const audioPlayer = document.getElementById('song');

        const playImages = document.querySelectorAll('.portada');
        const audioPlayers = document.querySelectorAll('.song');

        playImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                const audioPlayer = audioPlayers[index];
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
            });
        });

