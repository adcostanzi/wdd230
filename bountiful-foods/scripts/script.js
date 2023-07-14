const menuBtn = document.querySelector("#menu-toggle");
const yearSpan = document.querySelector("#year");
const divShadow = document.querySelector("#navigation-shadow");
const displayInfo = document.querySelector("#display-info-card");

menuBtn.addEventListener("click", () => {
    toggleForMenu();
});

divShadow.addEventListener("click", () => {
    toggleForMenu();
});

displayInfo.addEventListener("click", () =>{
    document.querySelector("#order-info").classList.toggle("expand");
    displayInfo.classList.toggle("expand");
});

function toggleForMenu(){
    document.querySelector(".navigation-menu").classList.toggle("expand");
    displayInfo.classList.toggle("overlay");
    divShadow.classList.toggle("activate");
    menuBtn.classList.toggle("overlay");
}

let yearDate = new Date();

yearSpan.textContent = ` ${yearDate.getFullYear()}`;