// Set selectors for year span, toggle menu button, info card and nav shadow info card
const menuBtn = document.querySelector("#menu-toggle");
const yearSpan = document.querySelector("#year");
const divShadow = document.querySelector("#navigation-shadow");
const displayInfo = document.querySelector("#display-info-card");

// Events for handling menu on the side
menuBtn.addEventListener("click", () => {
    toggleForMenu();
});

divShadow.addEventListener("click", () => {
    toggleForMenu();
});

displayInfo.addEventListener("click", () =>{
    document.querySelector(".order-info").classList.toggle("expand");
    document.querySelector(".check-orders").classList.toggle("expand");
    displayInfo.classList.toggle("expand");
});

function toggleForMenu(){
    document.querySelector(".navigation-menu").classList.toggle("expand");
    displayInfo.classList.toggle("overlay");
    divShadow.classList.toggle("activate");
    menuBtn.classList.toggle("overlay");
}

// Get year and apply it to yead span
let yearDate = new Date();
yearSpan.textContent = ` ${yearDate.getFullYear()}`;

// Get last modification on span #last-modified
document.querySelector("#last-modified").textContent = `Last modified ${document.lastModified}`;


//Get number of orders in Info Card
let orders = document.querySelector("#total-orders");
let totalOrders = localStorage.getItem("total-number-orders");
if (totalOrders === null){
    orders.innerHTML = "You have not ordered any drinks yet.<br>To make an order please go to the Fresh page.";    
} else {
    orders.textContent = `Total Number of drinks ordered: ${totalOrders}`;
}
