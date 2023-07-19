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

// lastLog is the <span> that will show results
const lastLog = document.querySelector("#last-login");
const msToDays = 86400000;

// call from localStorage the last-visit item, get current time
let lastVisit = Number(localStorage.getItem("last-visit"));
let todaysVisit = Date.now();

// get difference between last visit and current time, get number of days and round it up
let days = Math.round((todaysVisit - lastVisit) / msToDays);

if(days === 0){
    // If there is no days it means the used has already visited it today
    lastLog.textContent = `You have already visited our site today =)`;

} else {
    // Display number of days since last visit
    lastLog.textContent = `Number of days since your last visit: ${days}`;
}
// Store in localStorage the current time to be used as last-visit
localStorage.setItem("last-visit", todaysVisit);

