
let songs = [
    { title: "Song 1", artist: "Artist A", src: "song1.mp3" },
    { title: "Song 2", artist: "Artist B", src: "song2.mp3" },
    { title: "Song 3", artist: "Artist C", src: "song3.mp3" }
];

let index = 0;
let audio = document.getElementById("audio");
let playBtn = document.getElementById("play");

function loadSong(i) {
    audio.src = songs[i].src;
    document.getElementById("song-title").textContent = songs[i].title;
    document.getElementById("artist-name").textContent = songs[i].artist;
}
loadSong(index);


function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "||";
    } else {
        audio.pause();
        playBtn.textContent = "|>";
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
}


let progress = document.getElementById("progress");

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;

    document.getElementById("current").textContent =
        formatTime(audio.currentTime);

    document.getElementById("duration").textContent =
        formatTime(audio.duration);
});


progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});


document.getElementById("volume").addEventListener("input", (e) => {
    audio.volume = e.target.value;
});


function formatTime(time) {
    if (isNaN(time)) return "0:00";
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

let playlist = document.getElementById("playlist");
songs.forEach((song, i) => {
    let li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
        index = i;
        loadSong(index);
        audio.play();
    };
    playlist.appendChild(li);
});


audio.addEventListener("ended", nextSong);

