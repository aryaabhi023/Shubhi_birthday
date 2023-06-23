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

//alert section

const id1 = document.getElementById("1");
const id2 = document.getElementById("2");
const id3 = document.getElementById("3");
const id4 = document.getElementById("4");
const id5 = document.getElementById("5");
const id6 = document.getElementById("6");

id1.addEventListener("dblclick", () =>
  alert(
    "You know shubhagi my heart always beat faster when i am thinKing about u"
  )
);
id2.addEventListener("dblclick", () =>
  alert("Acha tell me what should i can gift u? Ek acha boyfriend chalega...?")
);
id3.addEventListener("dblclick", () =>
  alert(
    "Ek baat puchu agar permission ho toh? 22-06-2024 ko free ho toh mujhe aapke 10min. mil sakte hain kya??"
  )
);
id4.addEventListener("dblclick", () =>
  alert(
    "Stay with me please, itna acha insan ko main khona afford ni kar sakta..."
  )
);
id5.addEventListener("dblclick", () => {
  alert("Shubhi 😳😳");
  alert("i na 😌😌");
  alert("kind of 😳😳");
  alert("Love ❤️");
  alert("tokyo reveger😅😅");
});
id6.addEventListener("dblclick", () =>
  alert(
    "But to be honest I am thankful to u in many or love ka kiya hain i will always love u, then, now and forever>>>>"
  )
);
