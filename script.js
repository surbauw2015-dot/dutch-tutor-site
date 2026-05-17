// Dutch greeting rotator – small personal touch
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('.subtitle');
  if (!subtitle) return;

  const messages = [
    '🇳🇱 Dutch Tutor – For All Ages (10+)',
    '🇧🇪 Leer Nederlands op een leuke manier!',
    '🗣️ Start speaking Dutch today!',
    '🎉 Fun & interactive lessons'
  ];

  let index = 0;
  setInterval(() => {
    index = (index + 1) % messages.length;
    subtitle.style.opacity = '0';
    setTimeout(() => {
      subtitle.textContent = messages[index];
      subtitle.style.opacity = '1';
    }, 150);
  }, 4000);
});