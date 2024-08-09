document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('.audio-player');
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            audioPlayers.forEach(audio => audio.pause()); // Stop all other audio
            audioPlayers[index].currentTime = 0; // Reset current audio to start
            audioPlayers[index].play();
        });
    });
});
