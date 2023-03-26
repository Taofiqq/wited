const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// console.log(navMenu, navToggle, navClose);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const slider = document.querySelector(".image_slider");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const heading = document.querySelector(".caption p");
console.log(slider, arrowLeft, heading);

const images = ["wited1.jpg", "wited2.jpg", "wited3.jpg", "wited4.jpg"];

const headings = [
  "Abuja, 2021",
  "Lagos, 2021",
  "Owerri, 2021",
  "Port Harcourt, 2021",
];

let id = 0;

function changeImage(id) {
  slider.style.backgroundImage = `url(./img/${images[id]})`;

  slider.classList.add("image-fade");

  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 500);

  heading.innerText = headings[id];
}

arrowLeft.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  changeImage(id);
});

arrowRight.addEventListener("click", () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  changeImage(id);
});
