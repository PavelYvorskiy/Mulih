const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      584: {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 10
      },
      1000: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 10
      },
    },
  });