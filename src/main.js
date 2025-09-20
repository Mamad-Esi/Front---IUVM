import './style.css'

import Swiper  from 'swiper';
import 'swiper/css';
import 'swiper/bundle';

import { gsap } from "gsap";

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
  Modal,
  Collapse,
  Offcanvas,
  Dropdown,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Modal, Collapse, Offcanvas, Dropdown, Ripple });



// offcanvas
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');

// open
openBtn.addEventListener('click', () => {
  offcanvas.classList.remove('translate-x-full');
  overlay.classList.remove('opacity-0', 'pointer-events-none');
});

// close
closeBtn.addEventListener('click', () => {
  offcanvas.classList.add('translate-x-full');
  overlay.classList.add('opacity-0', 'pointer-events-none');
});

// overlay
overlay.addEventListener('click', () => {
  offcanvas.classList.add('translate-x-full');
  overlay.classList.add('opacity-0', 'pointer-events-none');
});



window.addEventListener("scroll", function () {
const navbar = document.getElementById("navbar");

if (window.scrollY > 50) {
  navbar.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
    "bg-black",
    "w-full" ,
    "p-3"
  );
  navbar.classList.remove("mt-32");
} else {
  navbar.classList.remove(
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
    "w-full"  ,
    "p-3"
  );
}
});



  const modal = document.getElementById("modal");
  const modalOpen = document.getElementById("modal-open");
  const modalClose = document.getElementById("modal-close");
  const modalCancel = document.getElementById("modal-cancel");

  // Open modal
  modalOpen.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal (X button + footer close)
  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  modalCancel.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });