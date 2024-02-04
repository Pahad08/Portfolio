const about_para = document.querySelector(".about-para p");
const word_span = document.querySelectorAll(".word");
const nav = document.querySelector(".nav-body");
const project_cards = document.querySelectorAll(".project-card");
const project_num = document.querySelectorAll(".project-num");

project_num.forEach((element) => {
  element.innerHTML += project_cards.length;
});

window.addEventListener("scroll", () => {
  let scrollpx = window.scrollY;

  if (scrollpx !== 0) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});

window.addEventListener("load", () => {
  let scrollpx = window.scrollY;
  if (scrollpx !== 0) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }

  word_span.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = 1;
    }, 15 * index);
  });
});
