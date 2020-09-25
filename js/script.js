fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    setSkillsHtml(data.skills.data);
  });

/* header */
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

const extendMenuIcon = document.querySelector("#extendMenuIcon");
extendMenuIcon.addEventListener("click", extendMenu);

function extendMenu() {
  console.log(extendMenuIcon);
  const navBar = document.querySelector(".nav_bar");
  navBar.classList.toggle("hide");
}

/* main */
setInterval(slideMenu, 3000);

function slideMenu() {
  const textArray = [
    "FOOD MADE WITH LOVE",
    "THE BEST INGREDIENTS",
    "THE LANGUAGE OF FOOD",
  ];
  const slideText = document.querySelector(".slide_image h1");
  slideText.innerHTML = textArray[Math.round(Math.random() * 2)];
  /* const slideList = document.querySelector(".material");
  slideList[Math.round(Math.random() * 2)].style.display = "none"; */
}

function setSkillsHtml(skills_data) {
  const skills = document.querySelector(".skill_part");
  skills.innerHTML = skills_data.map(getSkillsElement).join("");
}

function getSkillsElement(skill) {
  return `<div>
    <p>${skill.name} skill</p>
    <p>${skill.value}%</p>
    <div class="skill_level">
  </div>`;
}
