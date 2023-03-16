// Sticy Nav Bar
const nav = document.querySelector("nav");
function stickyNavbar() {
  nav.classList.toggle("wnscrl", window.pageYOffset > 40);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// Go To Top
var p = document.getElementById("toTop");
p.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.onscroll = function () {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? p.classList.add("show")
    : p.classList.remove("show");
};
// Animation

// Animation for Container
let containerAnimation = ScrollReveal({
  duration: 1500,
  distance: "200px",
});
containerAnimation.reveal(".home .container-fluid", {
  delay: 200,
  origin: "left",
});
containerAnimation.reveal(".container", {
  delay: 200,
  origin: "left",
});
containerAnimation.reveal(".main-title", { delay: 200, origin: "left" });
// Animation for Nav
let headerAnimation = ScrollReveal({
  duration: 500,
  distance: "60px",
});
headerAnimation.reveal("nav .container", { delay: 400, origin: "top" });

// Colors
const colors = document.getElementsByClassName("colors");
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeClr);
}
function changeClr() {
  sizeCir();

  this.style.transform = "scale(1.3)";

  let color = this.getAttribute("data-color");
  document.documentElement.style.setProperty("--main-clr", color);
  window.localStorage.setItem("bgClr", color);
}

function sizeCir() {
  for (i = 0; i < colors.length; i++) {
    colors[i].style.transform = "scale(1)";
  }
}
if (localStorage.getItem("bgClr")) {
  document.documentElement.style.setProperty(
    "--main-clr",
    localStorage.getItem("bgClr")
  );
  for (i = 0; i < colors.length; i++) {
    if (
      colors[i].getAttribute("data-color") === localStorage.getItem("bgClr")
    ) {
      colors[i].style.transform = "scale(1.3)";
    }
  }
}
// For Nav Btn And Circles
let cir = document.getElementById("cir");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (btn.getAttribute("aria-expanded") === "false") {
    cir.style.top = "35%";
  } else {
    cir.style.top = "60%";
  }
});
