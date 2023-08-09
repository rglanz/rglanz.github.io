const navbar = document.querySelector("#navigation");
const hamburgerMenu = document.querySelector("#navigation .cs-toggle");

// Hamburger menu listener
hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("cs-active");
  hamburgerMenu.classList.toggle("cs-active");
  document.body.classList.toggle("cs-open");

  ariaExpanded();
});

// Dropdown listeners
const dropdowns = Array.from(
  document.querySelectorAll("#navigation .cs-dropdown")
);

dropdowns.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("cs-active");
  });
});

// Aria-expanded helper
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");

  const expanded = csUL?.getAttribute("aria-expanded") === "true";
  csUL?.setAttribute("aria-expanded", !expanded);
}
