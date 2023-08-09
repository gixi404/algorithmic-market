const video = document.getElementsByTagName("video");

function handlePlayBtn() {
  if (video.paused) {
    // playBtn.src = "media/pause.png";
    return video.play();
  } else {
    // playBtn.src = "media/play.png";
    return video.pause();
  }
}

//?

export { handlePlayBtn };
