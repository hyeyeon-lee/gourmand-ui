const topMenu = document.querySelector("ul.top_menu");

const topMenuList = topMenu.querySelectorAll('.top_menu > li');
topMenuList.forEach((item) => {
  item.addEventListener("mouseover", toggleMenu);
  item.addEventListener("mouseleave", toggleMenu);
})

function toggleMenu(e) {
  const subMenu = e.target.querySelector(".sub_menu");
  subMenu.classList.toggle("hide");
}
