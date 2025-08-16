// Simple mobile nav toggle
const menuBtn = document.getElementById("menu-toggle");
const menuCloseBtn = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");
const overlay = document.querySelector(".overlay");
const main = document.querySelector("main");
menuBtn.addEventListener("click", handleMenu);

menuCloseBtn.addEventListener("click", handleMenu);

// Close the menu when clicking on the overlay (reuses the close button behavior)
overlay.addEventListener("click", handleMenu);

function handleMenu() {
    let willShow = navMenu.classList.contains("hidden");

    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
    menuBtn.setAttribute("aria-expanded", willShow ? "true" : "false");
    overlay.classList.toggle("hidden");
    // Set inert only when opening; remove inert when closing
    main.inert = willShow;
}
