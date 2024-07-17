document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('.audio-player');
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            audioPlayers[index].play();
        });
    });
});
