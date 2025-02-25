'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // ====== Слайдер (ваш існуючий код) =======
  const track = document.querySelector('.gallery__track');
  const slides = Array.from(document.querySelectorAll('.gallery__slide'));
  const indicators = Array.from(document.querySelectorAll('.gallery__indicator'));

  let currentIndex = 0;

  function updateGallery() {
    if (window.innerWidth >= 1280) {
      track.style.transform = 'none';
      return;
    }
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('gallery__indicator--active', index === currentIndex);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (window.innerWidth >= 1280) return;
      currentIndex = index;
      updateGallery();
    });
  });

  window.addEventListener('resize', updateGallery);
  updateGallery();
  // ========================================


  // ====== Меню (додаємо просту логіку) =======
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const body = document.body;
  const menu = document.getElementById('menu');

  openMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.add('no-scroll');
    menu.classList.add('menu--opened');
  });

  closeMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.remove('no-scroll');
    menu.classList.remove('menu--opened');
  });
});
