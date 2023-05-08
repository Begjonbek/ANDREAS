const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {  
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 18,
  breakpoints: {
    320:{
      slidesPerView: 1.5,
      spaceBetween: 8,
    } , 
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },})