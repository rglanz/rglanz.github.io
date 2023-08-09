const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

const detectColourScheme = () => {
  let theme = "light";

  if (localStorage.getItem("theme")) {
    // theme exists
    theme = localStorage.getItem("theme");
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // theme set to dark in browser
    theme = "dark";
  }

  if (theme === "light") {
    disableDarkMode();
    document.getElementById("dark-checkbox").checked = false;
  } else {
    enableDarkMode();
    document.getElementById("dark-checkbox").checked = true;
  }

  // Remove hidden class to show the body
  document.body.classList.remove("hidden");
};

// Initialize
detectColourScheme();

// Click listener
document.getElementById("dark-switch").addEventListener("click", (e) => {
  // change theme in localStorage
  localStorage.getItem("theme") === "light"
    ? enableDarkMode()
    : disableDarkMode();

  // Invert checkbox state
  const checkbox = document.getElementById("dark-checkbox");
  checkbox.checked = !checkbox.checked;

  // Prevent multiple event fires
  e.stopPropagation();
  e.preventDefault();
});
