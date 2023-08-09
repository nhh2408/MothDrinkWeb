const menuBtn = document.getElementById("nav-menu"),
  sidebarToggle = document.getElementById("sidebar"),
  closeBtn = document.getElementById("nav-close"),
  mainLogo = document.getElementById("main-logo");

menuBtn.addEventListener("click", () => {
  sidebarToggle.classList.add("show-menu");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebarToggle.classList.remove("show-menu");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});

// Scroll down and scroll up header
let lastScrollUp = 0;
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollUp) {
    header.style.top = "-58px";
  } else {
    header.style.top = "0";
  }
  lastScrollUp = scrollTop;
});

// Scroll up and scroll down logo
const navLogo = () => {
  const navLogo = document.getElementById("nav-logo");
  if (this.scrollY >= 150) {
    navLogo.classList.add("show-logo");
    mainLogo.classList.add("hide-logo");
  } else {
    navLogo.classList.remove("show-logo");
    mainLogo.classList.remove("hide-logo");
  }
};
window.addEventListener("scroll", navLogo);

import { listCard, nextBtn, prevBtn } from "./home.js";

const firstCard = listCard.querySelectorAll(".card")[0];
let firstCardWidth = firstCard.clientWidth - 400;

nextBtn.addEventListener("click", () => {
  listCard.scrollLeft += firstCardWidth;
  prevBtn.style.opacity = "1";
});

prevBtn.addEventListener("click", () => {
  listCard.scrollLeft -= firstCardWidth;
});
