// get current date and time and apply it to hidden input
const hiddenDate = document.querySelector("#todayDate");

function getHiddenDate() {
    let today = new Date();
    hiddenDate.value = today;
}

getHiddenDate();