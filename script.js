import { annotate } from "https://unpkg.com/rough-notation?module";
const wizard = document.querySelector("#wizard");
const tech = document.querySelector("#tech");
const master = document.querySelector("#master");
const frontend = document.querySelector("#frontend");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    annotate(master, { type: "highlight", color: "peachpuff" }).show();
  }, 1000);
  setTimeout(() => {
    annotate(wizard, { type: "circle", color: "plum", iterations: 5 }).show();
  }, 2200);

  setTimeout(() => {
    annotate(frontend, {
      type: "highlight",
      color: "lightblue",
      iterations: 3,
    }).show();
  }, 3400);

  setTimeout(() => {
    annotate(tech, {
      type: "underline",
      color: "coral",
      iterations: 3,
    }).show();
  }, 4400);
});

const navBtn = document.querySelector("#nav-btn i");
const navItems = document.querySelector(".nav-items-container");

navBtn.addEventListener("click", (e) => {
  if (navBtn.classList.contains("fa-bars")) {
    navBtn.classList.remove("fa-bars");
    navBtn.classList.add("fa-xmark");
    navItems.classList.toggle("show");
  } else {
    navBtn.classList.remove("fa-xmark");
    navItems.classList.toggle("show");
    navBtn.classList.add("fa-bars");
  }
});
