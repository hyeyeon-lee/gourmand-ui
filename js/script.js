fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    setSkillsHtml(data.data.skills);
    setStorysHtml(data.data.story);
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
const SHOW_CLASS = "show";
const firstSlide = document.querySelector("#firstSlide");
function slide() {
  const currentSlide = document.querySelector(`.slide_article.${SHOW_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOW_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOW_CLASS);
    } else {
      firstSlide.classList.add(SHOW_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOW_CLASS);
  }
}
slide();
setInterval(slide, 2000);
setSlideImageSize();

function setSlideImageSize(type = 0) {
  const images = document.querySelectorAll(".slide_article > img");
  images.forEach((img) => {
    const widthArr = img.dataset.ww
      .slice(1, img.dataset.ww.length - 1)
      .split(",");
    const heightArr = img.dataset.hh
      .slice(1, img.dataset.hh.length - 1)
      .split(",");
    img.setAttribute("width", widthArr[type].replace(/'/g, ""));
    img.setAttribute("height", heightArr[type].replace(/'/g, ""));
    img.setAttribute(
      "style",
      `width: ${widthArr[type].replace(/'/g, "")}; height:${heightArr[
        type
      ].replace(/'/g, "")};`
    );
  });
}

const mobileMatch = window.matchMedia("screen and (max-width: 480px)");
const tabletMatch = window.matchMedia(
  "screen and (min-width: 481px) and (max-width:1024px)"
);
const labtopMatch = window.matchMedia(
  "screen and (min-width: 1025px) and (max-width:1440px)"
);
const labtopMatch2 = window.matchMedia("screen and (min-width: 1441px)");

window.addEventListener("resize", resizeSlideImages);
function resizeSlideImages() {
  if (mobileMatch.matches) {
    setSlideImageSize(3);
    return;
  }
  if (tabletMatch.matches) {
    setSlideImageSize(2);
    return;
  }
  if (labtopMatch.matches) {
    setSlideImageSize(1);
    return;
  }
  if (labtopMatch2.matches) {
    setSlideImageSize();
    return;
  }
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

function setStorysHtml(storys_data) {
  console.log(storys_data);
  const storys = document.querySelector('.story_box');
  storys.innerHTML = storys_data.map(getStorysElement).join("");
}

function getStorysElement(story) {
  return ` <div class="food active">
  <dl class="food_txt">
    <dt>${story.name}</dt>
    <dd>${story.desc}</dd>
    <dd>${story.rate}</dd>
  </dl>
  <img
    src="${story.img}"
    alt="음식 이미지"
  />
</div>`;
}

const storyTab = document.querySelector('.story_tab ul');
storyTab.addEventListener('click', onClickStoryTab);

function onClickStoryTab(e) {
  // 기존 active 없애기
  const prevActive = document.querySelector('.active')
  prevActive.classList.remove('active');

  const target = e.target;
  target.classList.toggle('active');
  
}