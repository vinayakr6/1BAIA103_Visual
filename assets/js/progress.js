/* Local progress system for GitHub Pages.
   Firebase can replace this layer in a later phase without changing lesson UI. */

window.AIProgress = (() => {
  const KEY = "ai-course-progress-v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch {
      return {};
    }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function get(moduleId) {
    const data = load();
    return Number(data[moduleId] || 0);
  }

  function set(moduleId, percent) {
    const data = load();
    data[moduleId] = Math.max(0, Math.min(100, Math.round(percent)));
    save(data);
    updateDOM();
  }

  function markLessonComplete(lessonId) {
    const data = load();
    data[lessonId] = 100;
    save(data);
    updateDOM();
  }

  function updateDOM() {
    document.querySelectorAll("[data-progress-module]").forEach(el => {
      const id = el.dataset.progressModule;
      const value = get(id);
      const bar = el.querySelector(".progress-bar");
      const label = el.querySelector(".progress-label");
      if (bar) bar.style.width = value + "%";
      if (label) label.textContent = value + "% complete";
    });
  }

  return { load, save, get, set, markLessonComplete, updateDOM };
})();

document.addEventListener("DOMContentLoaded", () => AIProgress.updateDOM());
