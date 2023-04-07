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
