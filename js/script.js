const themeBtn = document.querySelector("#themeToggle");
const themeLabel = document.querySelector(".theme__label");

function setTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  themeLabel.classList.toggle("active", isLight);
  themeBtn.setAttribute("aria-checked", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
}
const saved = localStorage.getItem("theme");
if (saved === "light") {
  setTheme(true);
}

themeBtn.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("light"));
});
