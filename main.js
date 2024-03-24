import './style.css'

document.querySelector('#accept-cookies').addEventListener('click', () => {
  document.querySelector('.cookie-banner').style.display = 'none';
});

const countdownText = document.querySelector('#countdown p');
function updateCountdown() {
  const timeLeft = new Date('2024-05-11') - new Date();

  if (timeLeft <= 0) {
    countdownText.textContent = 'The Cookie Swap is happening!';
    return;
  }

  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  countdownText.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

function CookieParticle() {
  const source = document.querySelector('#cookie');
  const sourcePosition = source.getBoundingClientRect();

  const cookie = document.createElement('img');
  cookie.className = 'cookie-particle';
  cookie.src = 'cookie.png';

  const angle = Math.random() * Math.PI * 2;

  let x = sourcePosition.left + sourcePosition.width / 2;
  let y = sourcePosition.top + sourcePosition.height / 2;
  let width = 32;
  let opacity = 1;

  cookie.style.left = `${x}px`;
  cookie.style.top = `${y}px`;
  cookie.width = width;
  cookie.style.opacity = opacity;

  document.body.appendChild(cookie);

  function step() {
    x += Math.cos(angle) * 2
    y += Math.sin(angle) * 2
    width -= 0.05;
    opacity -= 0.005;

    cookie.style.left = `${x}px`;
    cookie.style.top = `${y}px`;
    cookie.width = width;
    cookie.style.opacity = opacity;

    if (opacity <= 0) {
      cookie.remove();
      return;
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}


cookie.addEventListener('click', () => {
  CookieParticle();
});
