'use strict';

// HOME SWIPER

const homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// CHANGE BACKGROUND HEADER

function scrollHeader() {
  const header = document.getElementById('header');
  //when the scroll is greater than 50 viewport height, add the scroll-header to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);
