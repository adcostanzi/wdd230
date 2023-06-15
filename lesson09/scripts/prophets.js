const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
let prophetsArray = new Array;

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    prophetsArray = data.prophets;
    displayProphets(prophetsArray);
}

getProphetData();


/* Sets button functionality and loops through all .card elements 
 and sets display to original form (flex) */
const allBtn = document.querySelector("#all-button");

allBtn.addEventListener("click", () => {
    const all = document.querySelectorAll(".card");

    all.forEach((card) => {
        card.style.display = "flex";        
    });
});



/* Sets button functionality and loops through all .card elements 
 if service years is less than 10 will set display to none */
const filterBtn = document.querySelector("#filter-button");

filterBtn.addEventListener("click", () =>{
    const displayedCards = document.querySelectorAll(".card");
    
    displayedCards.forEach((card) => {
        let service = card.querySelector(".service-years").textContent;
        let years = service.match(/\d+/g);
        let serviceYears = parseInt(years);
        if (serviceYears < 10){
            card.style.display = "none";
        }
    });
});

// Display all prophets in .cards div
const displayProphets = (prophets) => {
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        card.setAttribute("class", "card");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let service = document.createElement("span");
        let dob = document.createElement("span");
        let dod = document.createElement("span");
        let age = document.createElement("span");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}° Latter-Day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        service.textContent = `Service as Prophet: ${prophet.length} years`;
        service.classList.add("service-years");

        dob.textContent = `Birth: ${prophet.birthdate}`;
        
        dod.textContent = `Death: ${prophet.death}`;

        age.textContent = `${calculateAge(dob.textContent, dod.textContent)}`;
        // Append the section(card) with the created elements
        card.appendChild(h2);
       
        card.appendChild(service);
        card.appendChild(dob);
        card.appendChild(dod);
        card.appendChild(age);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
};






function calculateAge(dob, dod){
    let birth = Date.parse(dob);
    let death = Date.parse(dod);
    let pre = "Age at death: ";
    if (isNaN(death)){
        death = Date.now();
        pre = "Current age: "
    }
    let age = Math.floor((death - birth) / 31536000000);
    return `${pre}${age} years`;
}