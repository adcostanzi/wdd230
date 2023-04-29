let update = document.lastModified;
document.querySelector("#last-update").innerHTML = `Last update: ${update}`;

const year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;