'use strict'

// typing js for attarctive my hero section
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element', {
    strings: ['UI Developer', 'Frontend Developer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true
  });
});


// Toggle mobile menu and content when the bar is clicked
const mobileMenu = document.querySelector(".mobile");
const bar = document.querySelector("#bar");
const contant = document.querySelector(".contant")

bar.addEventListener("click", function () {
  mobileMenu.classList.toggle('hide');
  contant.classList.toggle('hide-contant');
});


// Hide mobile menu when a link inside it is clicked
document.querySelectorAll(".mobile a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelector(".mobile").classList.remove('hide');
    document.querySelector(".contant").classList.remove('hide-contant');
  });
});


// Hide mobile menu when clicking outside the mobile section
document.addEventListener("click", function (event) {
  if (!mobileMenu.contains(event.target) && !bar.contains(event.target)) {
    mobileMenu.classList.remove('hide');
    document.querySelector(".contant").classList.remove('hide-contant');
  }
});


// changing menu bar color when scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector('nav').style.backgroundColor = "#01122b"
  }
  else {
    document.querySelector('nav').style.backgroundColor = "transparent"
  }
})


// ============== loader animation ===============//
window.addEventListener("load", function () {
  document.querySelector(".loader-page").style.display = 'none'
})


// ==============Aos libarary for animate my web page===============//
AOS.init();
