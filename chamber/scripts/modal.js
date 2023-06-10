const modal = document.querySelector("#modal-membership");

const modalBtnOpen = document.querySelector("#modal-open");

const modalBtnClose = document.querySelector("#modal-close");

modalBtnOpen.addEventListener("click", () =>{
    modal.style.display = "block";
});


modalBtnClose.addEventListener("click", () => {
    modal.style.display = "none";
});