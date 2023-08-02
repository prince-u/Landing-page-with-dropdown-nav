//Handle dropdown functionality

const dropDowns = document.querySelectorAll(".dropdown");

document.addEventListener("click", (e) => {
  const activeDropDown = e.target.closest(".dropdown");
  if (activeDropDown && !e.target.matches(".dropdown button")) return;

  if (e.target.matches(".dropdown button")) {
    activeDropDown.classList.toggle("active");
  }

  dropDowns.forEach((dropdown) => {
    if (dropdown == activeDropDown) return;
    dropdown.classList.remove("active");
  });
});

//Handle sidebar menu

const sideBarBtn = document.querySelector(".side-bar-btn");
const sideBarMenu = document.querySelector("nav");
const darkBg = document.querySelector("[data-dark-bg]");
const body = document.querySelector("body");

sideBarBtn.addEventListener("click", (e) => {
  console.log("u");
  sideBarMenu.classList.toggle("active");
  darkBg.classList.toggle("dark-bg");
  if (sideBarMenu.classList.contains("active")) {
    sideBarBtn.innerHTML = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>`;
  } else {
    sideBarBtn.innerHTML = `<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>`;
  }
  body.classList.toggle("active");
});
darkBg.addEventListener("click", (e) => {
  sideBarMenu.classList.remove("active");
  darkBg.classList.remove("dark-bg");
  body.classList.remove("active");
  sideBarBtn.innerHTML = `<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>`;
});
