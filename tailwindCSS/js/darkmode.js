document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.documentElement.classList.add("dark");
    if (toggleBtn) toggleBtn.innerText = "☀️ 라이트모드";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("mode", isDark ? "dark" : "light");
      toggleBtn.innerText = isDark ? "☀️ 라이트모드" : "🌙 다크모드";
    });
  }
});
