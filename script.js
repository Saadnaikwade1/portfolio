// dark mode toggle
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark", checkbox.checked);
});

// hamburger togglee
const hamburger = document.querySelector(".hamburger");
const navcon = document.querySelector(".navcon");

hamburger.addEventListener("click", () => {
  navcon.classList.toggle("active");
});
