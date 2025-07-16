// components/nav.js
export function renderNav(current) {
  return `
    <nav class="bg-gray-100 text-center p-2">
      <a href="home.html" class="mx-4 ${
        current === "home"
          ? "text-blue-600 font-bold"
          : "text-gray-700 hover:text-blue-500"
      }">홈</a>
      <a href="about.html" class="mx-4 ${
        current === "about"
          ? "text-blue-600 font-bold"
          : "text-gray-700 hover:text-blue-500"
      }">소개</a>
    </nav>
  `;
}
