/* Navigation helpers for the lesson pages built in later phases */

window.AINavigation = {
  go(url) {
    if (url) window.location.href = url;
  },

  wireInternalLinks() {
    document.querySelectorAll("[data-go]").forEach(button => {
      button.addEventListener("click", () => this.go(button.dataset.go));
    });
  }
};

document.addEventListener("DOMContentLoaded", () => AINavigation.wireInternalLinks());
