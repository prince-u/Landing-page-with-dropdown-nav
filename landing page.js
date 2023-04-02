const dropDowns = document.querySelectorAll(".dropdown button");

document.addEventListener("click", (e) => {
  let closestParent = e.target.closest(".dropdown");
  if (closestParent) {
    if (closestParent.classList.contains("active")) {
      closestParent.classList.remove("active");
      return;
    }
    dropDowns.forEach((dropDown) => {
      dropDown.closest(".dropdown").classList.remove("active");
    });
    closestParent.classList.add("active");
  } else {
    dropDowns.forEach((dropDown) => {
      dropDown.closest(".dropdown").classList.remove("active");
    });
  }
});
