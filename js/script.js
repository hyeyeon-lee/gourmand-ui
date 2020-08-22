const sideMenu = document.querySelector("ul.icons li:nth-child(2)");
const menuIcon = document.querySelector("#menuIcon");
menuIcon.addEventListener("mouseover", changeIcon);
menuIcon.addEventListener("mouseleave", changeIcon);
sideMenu.addEventListener("click", toggleSideMenu);

function changeIcon() {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-plus");
}

const aside = document.querySelector("aside");
function toggleSideMenu() {
  aside.style.display = "block";
}

const closeIcon = document.querySelector("#closeIcon");
closeIcon.addEventListener("click", hideSideMenu);

function hideSideMenu() {
  aside.style.display = "none";
}

setInterval(slideMenu, 3000);

function slideMenu() {
  const textArray = [
    "FOOD MADE WITH LOVE",
    "THE BEST INGREDIENTS",
    "THE LANGUAGE OF FOOD",
  ];
  const slideText = document.querySelector(".slide_image h1");
  slideText.innerHTML = textArray[Math.round(Math.random() * 2)];
}
