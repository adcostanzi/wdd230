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


// Toggle banner on top if it's Monday or Tuesday

let banner = document.querySelector(".banner");


// for test purposes: "May 15, 2023 23:15:00"

let day = new Date("May 15, 2023 23:15:00").getDay();


if (day == 1 || day == 2)
{
    banner.classList.toggle("toggleOn");
} 

const closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});