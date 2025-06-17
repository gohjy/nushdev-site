window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('appear');
    }
  });
});
