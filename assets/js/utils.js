/* Utility functions shared across lessons */

window.AIUtils = {
  qs(selector, root = document) {
    return root.querySelector(selector);
  },

  qsa(selector, root = document) {
    return [...root.querySelectorAll(selector)];
  },

  escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  },

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  announce(message) {
    const live = document.querySelector("[data-live-region]");
    if (live) live.textContent = message;
  }
};
