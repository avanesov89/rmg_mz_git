var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const mediaQuery = window.matchMedia('(max-width: 1023px)');

if (mediaQuery.matches) {
  swiper.destroy();
}

//# sourceMappingURL=main.js.map
