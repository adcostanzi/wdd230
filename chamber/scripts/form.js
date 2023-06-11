// On click of Read more button open inline-modal
const modal = document.querySelector("#modal-membership");

const modalBtnOpen = document.querySelector("#modal-open");

const modalBtnClose = document.querySelector("#modal-close");

modalBtnOpen.addEventListener("click", () =>{
    modal.style.display = "block";
});


modalBtnClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// get current date and time and apply it to hidden input
const hiddenDate = document.querySelector("#todayDate");

function getHiddenDate() {
    let today = new Date();
    hiddenDate.value = today;
}

getHiddenDate();