let perViewSlides;
let x = window.matchMedia("(max-width: 600px)")
  if (x.matches) { // If media query matches
    perViewSlides=3;
  } else {
    perViewSlides=5;
  }


console.log(perViewSlides);

let loginModal = document.getElementById('loginModal');
loginModal.style.display="none"

let swiper1= new Swiper(".mySwiper1", {
    slidesPerView: perViewSlides,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    // loopFillGroupWithBlank: true,
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