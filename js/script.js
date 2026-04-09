const weddingDate = new Date('2026-03-12T18:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = d;
  document.getElementById('cd-hours').textContent = h;
  document.getElementById('cd-mins').textContent = m;
  document.getElementById('cd-secs').textContent = s;
}

setInterval(updateCountdown, 1000);
