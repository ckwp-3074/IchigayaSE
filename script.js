document.addEventListener("DOMContentLoaded", function () {
    // ページが読み込まれたら実行されるコード

    // オーディオ要素を取得
    const audioPlayers = document.querySelectorAll(".audio-player");

    // 再生ボタンを取得
    const playButtons = document.querySelectorAll(".play-button");

    // 再生ボタンがクリックされたときの処理
    playButtons.forEach((playButton, index) => {
        playButton.addEventListener("click", function () {
            const audioPlayer = audioPlayers[index];
            if (audioPlayer.paused) {
                // オーディオが一時停止中なら再生
                audioPlayer.play();
                playButton.textContent = "一時停止";
            } else {
                // オーディオが再生中なら一時停止
                audioPlayer.pause();
                playButton.textContent = "再生";
            }
        });
    });

    // オーディオ再生が終了したときの処理
    audioPlayers.forEach((audioPlayer) => {
        audioPlayer.addEventListener("ended", function () {
            // 再生ボタンを「再生」に戻す
            const index = Array.from(audioPlayers).indexOf(audioPlayer);
            if (index >= 0 && index < playButtons.length) {
                playButtons[index].textContent = "再生";
            }
        });
    });
});
