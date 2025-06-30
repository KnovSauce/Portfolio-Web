

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".toggle-btn").textContent = "Light Mode";
  }
});
