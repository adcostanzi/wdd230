// Toogle function for menu

function toggleMenu () {
    document.querySelector("#whopperBtn").classList.toggle("open");
    document.querySelector("#menu").classList.toggle("open");
}

const m = document.querySelector("#whopperBtn");
m.onclick = toggleMenu;

//  Get date and format for header date
const options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
};

let today = new Date().toLocaleDateString("en-UK",options);

document.querySelector("#date").textContent = today;

// Get year to footer span #year
let year = new Date().getFullYear();
document.querySelector("#year").textContent = year; 

// Get last modification and who it on span #last-modified

document.querySelector("#last-modified").textContent = `Last modified ${document.lastModified}`;