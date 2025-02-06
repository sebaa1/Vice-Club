document.addEventListener('DOMContentLoaded', function() {
    const audios = document.querySelectorAll("audio");
    const nowPlaying = document.getElementById("nowPlaying");
    const playingTitle = document.getElementById("playingTitle");
    const playingImage = document.getElementById("playingImage");

    audios.forEach(audio => {
        audio.addEventListener("play", function () {
            audios.forEach(a => {
                if (a !== audio) {
                    a.pause();
                }
            });

            const container = audio.closest(".radio-container");
            if (!container) return;

            const title = container.querySelector("h3").textContent;
            const imageSrc = container.querySelector("img").src;

            playingTitle.textContent = "Reproduciendo: " + title;
            playingImage.src = imageSrc;
            nowPlaying.classList.remove("hidden");
        });

        audio.addEventListener("ended", function () {
            nowPlaying.classList.add("hidden");
        });
    });
});
