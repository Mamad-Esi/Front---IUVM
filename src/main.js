import './style.css'

import Swiper  from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/bundle';
// import 'swiper/css/pagination';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, 
    spaceBetween: 30,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
        dynamicBullets: false, 
    },
    breakpoints: {
        0: {
            slidesPerView: 1, 
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});

import {
  Collapse,
  Dropdown,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Dropdown, Ripple });



  const pagination = document.getElementById('pagination');
  const links = pagination.querySelectorAll('.page-link');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      links.forEach(l => {
        l.classList.remove('bg-blue-600', 'text-white');
        l.classList.add('bg-white', 'text-gray-700');
        l.classList.remove('hover:bg-blue-700');
        l.classList.add('hover:bg-gray-100');
        l.removeAttribute('aria-current');
      });

      this.classList.add('bg-blue-600', 'text-white');
      this.classList.remove('bg-white', 'text-gray-700');
      this.classList.remove('hover:bg-gray-100');
      this.classList.add('hover:bg-blue-700');
      this.setAttribute('aria-current', 'page');
    });
  });