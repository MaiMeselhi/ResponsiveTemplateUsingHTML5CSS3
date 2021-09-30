// to Build menu
const hamburger = document.querySelector(".hamburger");
const navBar__links= document.querySelector(".navBar__links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navBar__links.classList.toggle("active");
}
const navLink = document.querySelectorAll("nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}