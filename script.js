const animate = document.querySelector(".toggle");
const base = document.querySelector(".hamburger-nav");
animate.addEventListener("click", function () {
  animate.classList.toggle("animate");
  base.classList.toggle("animate");
});
