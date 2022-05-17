// 1. get Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = Array.from(player.querySelectorAll("[data-skip]"));
const ranges = player.querySelectorAll(".player_slider");
// console.log(skipButtons);

// 2. build functions

function togglePlay() {
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
}

// 3. hook up the addEventListeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipButtons.forEach(button => button.addEventListener("click", skip));
