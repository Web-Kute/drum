window.addEventListener('keydown', playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (key && audio) {
    audio.play();
    audio.currentTime = 0;

    key.classList.add('playing');
    key.children[0].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    key.children[0].style.color = '#FFF';

    setTimeout(() => {
      key.classList.remove('playing');
      key.children[0].style.backgroundColor = '#EEE';
      key.children[0].style.color = '#000';
    }, 200);
  }
}

const colors = [
  '#ef5777',
  '#575fcf',
  '#ffc048',
  '#ffa801',
  '#ffd32a',
  '#1e272e',
  '#05c46b',
  '#00d8d6',
  '#0fbcf9',
];
