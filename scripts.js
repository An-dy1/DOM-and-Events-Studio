function moveRocket(direction) {
  const rocket = document.getElementById('rocket');
  const shuttleBackground = document.getElementById('shuttleBackground');

  const backgroundWidth = shuttleBackground.offsetWidth;
  const backgroundHeight = shuttleBackground.offsetHeight;

  let bottom = parseInt(rocket.style.bottom) || 0;
  let left = parseInt(rocket.style.left) || 0;

  if (direction === 'up' && bottom <= backgroundHeight - 75) {
    bottom += 10;
  } else if (direction === 'down' && bottom >= 10) {
    bottom -= 10;
  } else if (direction === 'left' && left >= 10) {
    left -= 10;
  } else if (direction === 'right' && left <= backgroundWidth - 75) {
    left += 10;
  }

  rocket.style.bottom = `${bottom}px`;
  rocket.style.left = `${left}px`;
}

function runApp() {
  const upButton = document.getElementById('up');
  const downButton = document.getElementById('down');
  const leftButton = document.getElementById('left');
  const rightButton = document.getElementById('right');

  upButton.addEventListener('click', () => moveRocket('up'));
  downButton.addEventListener('click', () => moveRocket('down'));
  leftButton.addEventListener('click', () => moveRocket('left'));
  rightButton.addEventListener('click', () => moveRocket('right'));
}

window.addEventListener('load', runApp);
