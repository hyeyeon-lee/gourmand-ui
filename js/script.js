const topMenu = document.querySelector("ul.top_menu");
topMenu.addEventListener("mouseover", toggleMenu);
topMenu.addEventListener("mouseleave", toggleMenu);

function toggleMenu(e) {
  const subMenu = e.target.querySelector(".sub_menu");
  subMenu.classList.toggle("hide");
}
