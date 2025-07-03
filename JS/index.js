const swiper = new Swiper(".checkout-swiper", {
  slidesPerView: 3,
  spaceBetween: 70,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    575: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3 },
  },
});
