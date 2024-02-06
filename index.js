const about_para = document.querySelector(".about-para p");
const word_span = document.querySelectorAll(".word");
const nav = document.querySelector(".nav-body");
const project_cards = document.querySelectorAll(".project-card");
const project_num = document.querySelectorAll(".project-num");
const menu_btn = document.querySelector("#menu-btn");
const nav_links = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-container a");
const intro_container = document.querySelector(".intro-container");
const about_body = document.querySelector("#about-body");
const about_container = document.querySelector(".about-container");
const skill_body = document.querySelector("#skills-body");
const skills_container = document.querySelector(".skills-container");
const projects_body = document.querySelector("#projects-body");
const projects_container = document.querySelector(".projects-container");
const contact_body = document.querySelector("#contact-body");
const contact_container = document.querySelector(".contact-container");
const left_btn = document.querySelectorAll(".left");
const right_btn = document.querySelectorAll(".right");

//Show the the nav links
menu_btn.addEventListener("click", () => {
  nav_links.classList.toggle("show-nav");
});

//hide nav links when clicked
links.forEach((element) => {
  element.addEventListener("click", () => {
    nav_links.classList.toggle("show-nav");
  });
});

//add the the total projects
project_num.forEach((element) => {
  element.innerHTML += project_cards.length;
});

//add class to the element
function AddClass(element, classname, word_span = "") {
  if (word_span !== "") {
    element.classList.add(classname);
    //load the paragraph in the about page
    word_span.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
      }, 15 * index);
    });
  } else {
    element.classList.add(classname);
  }
}

//when scrolling add bg to the nav
window.addEventListener("scroll", () => {
  let scrollpx = window.scrollY;
  let intro_offset = intro_container.offsetTop;
  let about_offset = about_body.offsetTop;
  let skill_offset = skill_body.offsetTop;
  let project_offset = projects_body.offsetTop;
  let contact_offset = contact_body.offsetTop;

  if (scrollpx !== 0) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
    about_container.classList.remove("show-about");
    word_span.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 0;
      }, 15 * index);
    });
  }

  if (
    about_offset === Math.round(scrollpx) ||
    Math.round(scrollpx) > intro_offset + 300
  ) {
    AddClass(about_container, "show-about", word_span);
    skills_container.classList.remove("show-skill");
  }

  if (
    skill_offset === Math.round(scrollpx) ||
    Math.round(scrollpx) > about_offset + 300
  ) {
    AddClass(skills_container, "show-skill");
    projects_container.classList.remove("show-project");
  }

  if (
    project_offset === Math.round(scrollpx) ||
    Math.round(scrollpx) > skill_offset + 300
  ) {
    AddClass(projects_container, "show-project");
    contact_container.classList.remove("show-contact");
  }

  if (
    contact_offset === Math.round(scrollpx) ||
    Math.round(scrollpx) > project_offset + 300
  ) {
    AddClass(contact_container, "show-contact");
  }
});

//when window is loaded add bg to the nav
window.addEventListener("load", () => {
  let scrollpx = window.scrollY;
  if (scrollpx !== 0) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});

//show the next project
right_btn.forEach((element) => {
  element.addEventListener("click", NextProject);
});

//show the previous project
left_btn.forEach((element) => {
  element.addEventListener("click", PreviousProject);
});

//project slider
function NextProject() {
  for (let index = 0; index < project_cards.length; index++) {
    if (
      index == project_cards.length - 1 &&
      project_cards[project_cards.length - 1].classList.contains("active")
    ) {
      project_cards[index].classList.remove("active");
      project_cards[0].classList.add("active");
      break;
    }

    if (project_cards[index].classList.contains("active")) {
      project_cards[index].classList.remove("active");
      project_cards[index + 1].classList.add("active");
      break;
    }
  }
}

function PreviousProject() {
  for (let index = 0; index < project_cards.length; index++) {
    if (index == 0 && project_cards[0].classList.contains("active")) {
      project_cards[0].classList.remove("active");
      project_cards[project_cards.length - 1].classList.add("active");
      break;
    }

    if (project_cards[index].classList.contains("active")) {
      project_cards[index].classList.remove("active");
      project_cards[index - 1].classList.add("active");
      break;
    }
  }
}
