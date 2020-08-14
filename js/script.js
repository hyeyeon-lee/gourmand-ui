const topMenu = document.querySelector("ul.top_menu");

const topMenuList = topMenu.querySelectorAll(".top_menu > li > a");
topMenuList.forEach((item) => {
  item.addEventListener("mouseover", toggleMenu);
  item.addEventListener("mouseleave", toggleMenu);
});

function toggleMenu(e) {
  const subMenu = e.target.parentNode.querySelector(".sub_menu");
  subMenu.classList.toggle("hide");
}
