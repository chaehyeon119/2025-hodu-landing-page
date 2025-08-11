// js/nav.js
const navToggle = document.getElementById("navToggle");
const body = document.body;

navToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  // 접근성 상태 업데이트
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// 메뉴 영역 밖 클릭하면 닫기 (선택)
document.addEventListener("click", (e) => {
  const header = document.querySelector("header");
  if (body.classList.contains("menu-open") && !header.contains(e.target)) {
    body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
