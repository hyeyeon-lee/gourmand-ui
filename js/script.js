const topMenu = document.querySelector(".top_menu>*");
//console.log(topMenu);
topMenu.addEventListener("mouseover", toggleMenu);

function toggleMenu(e) {
  const subMenu = document.querySelector(".sub_menu");
  subMenu.classList.toggle("hide");
}
