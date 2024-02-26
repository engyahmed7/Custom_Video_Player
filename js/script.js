const video = document.querySelector("video");
const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const progress = document.querySelector(".progress");
const muteButton = document.querySelector(".mute");
const volume = document.querySelector(".volume");
const speed = document.querySelector(".speed");
const fullscreenButton = document.querySelector(".fullscreen");
const backward10sec = document.querySelector(".backward-10sec");
const backward5sec = document.querySelector(".backward-5sec");
const forward5sec = document.querySelector(".forward-5sec");
const forward10sec = document.querySelector(".forward-10sec");
const videoTime = document.querySelector(".time-video");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayButton() {
  playButton.textContent = video.paused ? "Play" : "Pause";
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleMute() {
  video.muted = !video.muted;
  muteButton.textContent = video.muted ? "Unmute" : "Mute";
}

function updateVolume() {
  video.volume = volume.value;
}

function updateSpeed() {
  video.playbackRate = speed.value;
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
}

function goBackward10sec() {
  video.currentTime -= 10;
}

function goBackward5sec() {
  video.currentTime -= 5;
}

function goForward5sec() {
  video.currentTime += 5;
}

function goForward10sec() {
  video.currentTime += 10;
}

function updateTime() {
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  videoTime.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", () => {
  updateProgress();
  updateTime();
});
playButton.addEventListener("click", togglePlay);
stopButton.addEventListener("click", stopVideo);
progress.addEventListener("click", scrub);
muteButton.addEventListener("click", toggleMute);
volume.addEventListener("input", updateVolume);
speed.addEventListener("input", updateSpeed);
fullscreenButton.addEventListener("click", toggleFullscreen);
backward10sec.addEventListener("click", goBackward10sec);
backward5sec.addEventListener("click", goBackward5sec);
forward5sec.addEventListener("click", goForward5sec);
forward10sec.addEventListener("click", goForward10sec);