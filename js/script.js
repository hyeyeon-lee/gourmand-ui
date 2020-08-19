const sideMenu = document.querySelector("ul.icons li:nth-child(2)");
sideMenu.addEventListener("click", toggleSideMenu);

function toggleSideMenu() {
  const aside = document.querySelector("aside");
  aside.style.display = "block";
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
