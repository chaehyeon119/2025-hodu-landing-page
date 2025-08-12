// 요소 가져오기 (이름 분리)
const openSubscribeModalBtn = document.getElementById("openModalBtn"); // 구독 모달 열기 버튼
const closeSubscribeModalBtn = document.getElementById("closeModalBtn"); // 구독 모달 X
const openMenuModalBtn = document.getElementById("openMenuModalBtn"); // 메뉴 모달 열기 (헤더 햄버거)
const closeMenuModalBtn = document.getElementById("closeMenuModalBtn"); // 메뉴 모달 X

const myModal = document.getElementById("myModal"); // 구독 모달
const menuModal = document.getElementById("menu-modal"); // 메뉴 모달

// === 구독 모달 (subscribe) ===
openSubscribeModalBtn.addEventListener("click", () => {
  myModal.style.display = "block";
});
closeSubscribeModalBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});
// 바깥 클릭 닫기
myModal.addEventListener("click", (e) => {
  if (e.target === myModal) myModal.style.display = "none";
});

// === 메뉴 모달 ===
// A안: href 기본동작 막고 JS로만 열기(해시 변경 X → :target 영향 없음)
openMenuModalBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 해시 이동 방지
  menuModal.style.display = "block";
});
closeMenuModalBtn.addEventListener("click", () => {
  menuModal.style.display = "none";
});
// 바깥 클릭 닫기
menuModal.addEventListener("click", (e) => {
  if (e.target === menuModal) menuModal.style.display = "none";
});
