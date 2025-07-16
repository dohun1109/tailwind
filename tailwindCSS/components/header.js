// components/header.js
export function renderHeader(currentPage = "") {
  return `
    <header>
      <nav
        class="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md rounded-b-lg z-50"
      >
        <div class="flex items-center gap-3">
          <img
            src="images/bono.jpg"
            alt="로고"
            class="w-8 h-8 rounded-full border-2 border-secondary shadow-sm"
          />
          <a
            href="index.html"
            class="text-white font-semibold text-lg tracking-wide select-none"
            >myPortfolio</a
          >
        </div>
        <ul class="flex gap-5">
          <li>
            <a
              href="index.html"
              class="px-3 py-1 rounded-lg text-sm font-semibold text-white ${
                currentPage === "home"
                  ? "bg-secondary shadow-md hover:bg-yellow-400 hover:text-gray-900"
                  : "bg-gray-800 shadow-sm hover:bg-secondary hover:text-white hover:shadow-md"
              } transition"
              >Home</a
            >
          </li>
          <li>
            <a
              href="about.html"
              class="px-3 py-1 rounded-lg text-sm text-white ${
                currentPage === "about"
                  ? "bg-secondary shadow-md hover:bg-yellow-400 hover:text-gray-900"
                  : "bg-gray-800 shadow-sm hover:bg-secondary hover:text-white hover:shadow-md"
              } transition"
              >About</a
            >
          </li>
          <li>
            <a
              href="portfolio.html"
              class="px-3 py-1 rounded-lg text-sm text-white ${
                currentPage === "portfolio"
                  ? "bg-secondary shadow-md hover:bg-yellow-400 hover:text-gray-900"
                  : "bg-gray-800 shadow-sm hover:bg-secondary hover:text-white hover:shadow-md"
              } transition"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="contact.html"
              class="px-3 py-1 rounded-lg text-sm text-white ${
                currentPage === "contact"
                  ? "bg-secondary shadow-md hover:bg-yellow-400 hover:text-gray-900"
                  : "bg-gray-800 shadow-sm hover:bg-secondary hover:text-white hover:shadow-md"
              } transition"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>
  `;
}
