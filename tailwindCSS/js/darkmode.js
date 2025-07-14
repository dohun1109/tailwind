document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.documentElement.classList.add("dark");
    if (toggleBtn) toggleBtn.innerText = "☀️ 라이트모드";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark"); //dark클래스가 없으면 추가하고 true , 있으면 제거하고 false
      localStorage.setItem("mode", isDark ? "dark" : "light"); //하위페이지에서도 상태유지되도록 localStorage에 저장
      toggleBtn.innerText = isDark ? "☀️ 라이트모드" : "🌙 다크모드";
    });
  }
});
