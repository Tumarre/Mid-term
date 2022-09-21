const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".navMenu");
console.log(navMenu.innerHTML);
const navLinkArr = Array.from(document.querySelectorAll(".w-nav-link"));

const heroactive = document.querySelector(".godown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  heroactive.classList.toggle("pabajo");
});

navLinkArr.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
