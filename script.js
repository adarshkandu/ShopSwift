const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 3000, // time in ms (e.g., 3 seconds)
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

