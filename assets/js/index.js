window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (key && audio) {
    audio.play();
    key.classList.add('playing');
    audio.currentTime = 0;
  }
  setTimeout(() => key.classList.remove('playing'), 200);
}
