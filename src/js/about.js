import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

let swiper = new Swiper('.swiper-container', {
  breakpoints: {
    1: {
      loop: false,
      slidesPerView: 1
    },
    426: {
      slidesPerView: 2
    },
    767: {
      loop: true,
      slidesPerView: 3
    },
    769: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    },
    1920: {
      slidesPerView: 5
    },
    2560: {
      slidesPerView: 6
    }
  },
  loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




