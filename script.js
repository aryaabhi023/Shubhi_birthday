const audio = document.getElementById("audio");
const playbtn = document.getElementById("play");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const musicContainer = document.getElementById("music-container");
const progress = document.getElementById("progress");

const songlist = ["I", "want", "to", "say", "something", "umm", "ILU"];
let songIndex = 0;

loadSong(songlist[songIndex]);

function loadSong(song) {
  title.innerHTML = song;
  cover.src = `${song}.jpg`;
  audio.src = `${song}.mp3`;
}

function playSong() {
  audio.play();
  musicContainer.classList.add("play");
  playbtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
  audio.pause();
  musicContainer.classList.remove("play");
  playbtn.innerHTML = '<i class="fas fa-play"></i>';
}

function nextSong() {
  songIndex = (songIndex + 1) % songlist.length;
  loadSong(songlist[songIndex]);
  playSong();
}

function prevSong() {
  songIndex = (songlist.length + (songIndex - 1)) % songlist.length;
  loadSong(songlist[songIndex]);
  playSong();
}

function updateTime(e) {
  const { duration, currentTime } = e.srcElement;
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    progress.innerHTML = `<input type="range" min="0" max="${duration}" value="${currentTime}" step="0.1" id='range' />`;
    const range = document.getElementById("range");
    range.addEventListener("change", update);
    if (currentTime === duration) {
      nextSong();
    }
  }
  function update() {
    audio.currentTime = range.value;
  }
}
playbtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextbtn.addEventListener("click", nextSong);

prevbtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", updateTime);
