/* Homepage interactions */

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const reset = document.querySelector("[data-reset-progress]");
  if (reset) {
    reset.addEventListener("click", () => {
      if (confirm("Reset locally stored course progress?")) {
        localStorage.removeItem("ai-course-progress-v1");
        AIProgress.updateDOM();
      }
    });
  }

  AIProgress.updateDOM();
});
