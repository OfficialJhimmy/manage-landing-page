"use strict";
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const btnScrollTo = document.querySelector(".btn--scroll-to");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

// IMPLEMENTING THE CAROUSEL FUNCTION
function initParadoxWay() {
  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});

// IMPLEMENTING SMOOTH SCROLLING
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// PAGE NAVIGATION
document.querySelector(".menu-list").addEventListener("click", function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// FORM VALIDATION
const email = document.querySelector("#email");
const error = document.querySelector(".error-text");
const btn = document.querySelector(".btn-submit");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
  if (email.value.match(regExp)) {
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    error.style.display = "none";
    btn.style.display = "inline-block";
  } else {
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    error.style.display = "block";
    btn.style.display = "none";
  }
  if (email.value == "") {
    email.style.borderColor = "lightgrey";
    email.style.background = "#fff";
    error.style.display = "none";
    btn.style.display = "none";
  }
}
