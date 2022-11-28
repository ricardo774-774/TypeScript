(() => {
    enum AudioLevel {
        min = 10,
        medium,
        max = 30
    };

    let currentAudio: AudioLevel = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

})()