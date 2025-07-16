// components/footer.js
export function renderFooter() {
  return `
    <footer
      class="bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white text-center py-2 px-4 rounded-t-lg shadow-inner mt-12"
    >
      <p>e-mail: dohun1109@naver.com</p>
      <small>© 2025 나의 포트폴리오</small>
    </footer>

    <button
      id="darkModeToggle"
      class="fixed bottom-20 right-6 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
    >
      🌙 다크모드
    </button>
  `;
}
