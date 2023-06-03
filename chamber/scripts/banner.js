// Toggle banner on top if it's Monday or Tuesday

let banner = document.querySelector(".banner");


// for test purposes: "May 15, 2023 23:15:00"

let day = new Date().getDay();


if (day == 1 || day == 2)
{
    banner.classList.toggle("toggleOn");
} 

const closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});