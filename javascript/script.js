let swiper1= new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });