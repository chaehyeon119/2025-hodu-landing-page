const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const myModal = document.getElementById("myModal");

// 모달 열기
openModalBtn.addEventListener("click", () => {
  myModal.style.display = "block";
});

// 모달 닫기 (X 버튼)
closeModalBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});

// 모달 닫기 (바깥 클릭)
window.addEventListener("click", (event) => {
  if (event.target === myModal) {
    myModal.style.display = "none";
  }
});
