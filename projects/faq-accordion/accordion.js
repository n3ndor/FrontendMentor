document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const question = item.querySelector('.accordion-question');
    question.addEventListener('click', () => {
      const answer = item.querySelector('.accordion-answer');
      const iconPlus = question.querySelector('.icon-plus');
      const isOpen = !answer.classList.contains('hidden');

      answer.classList.toggle('hidden');

      iconPlus.src = isOpen ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
    });
  });
});
