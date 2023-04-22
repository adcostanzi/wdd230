const year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;

let update = document.lastModified;
document.querySelector("#last-update").innerHTML = `Last Updated: ${update}`;