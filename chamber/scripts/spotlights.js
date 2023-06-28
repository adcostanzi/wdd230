async function getData() {
    const response = await fetch("./data.json");
    const data = await response.json();
    displaySpotlights(data.members);
}

getData();

const spotlightMembership = [];
const spotlightContainer = document.querySelector(".spotlights");

function generateRandomNumbers(max) {
    let numbers = [];
    let number;
    for (let index = 0; index < 3; index++) {
        do {
            min = 0;
            max = Math.floor(max);
            number = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (numbers.includes(number) == true);
        numbers.push(number);
    }
    return numbers;
}

function displaySpotlights(members) {
    members.forEach((member) => {
        if (member.membershipLevel == "gold" || member.membershipLevel == "silver") {
            spotlightMembership.push(member);
        }
    });

    let membership = spotlightMembership.length - 1;
    let randomNumbers = generateRandomNumbers(membership);
    let i = 1;
    randomNumbers.forEach((number) => {
        let spot = spotlightMembership[number];
        let div = document.createElement("div");
        div.classList.add("spotlight");
        if (i === 3) {
            div.setAttribute("id", "hidden-spotlight");
        }
        let span1 = document.createElement("span");
        span1.classList.add("title");
        span1.textContent = `${spot.name}`;
        let img = document.createElement("img");
        img.setAttribute("src", `${spot.logo}`);
        img.setAttribute("alt", `${spot.name} logo`);
        let span2 = document.createElement("span");
        span2.textContent = `Member since: ${spot.memberSince}`;
        let span3 = document.createElement("span");
        span3.textContent = `${spot.phone}`;
        let website = document.createElement("a");
        website.classList.add("link-low-profile");
        website.setAttribute("href", `${spot.website}`)
        website.setAttribute("target", "blank")
        website.textContent = "Website";
        div.appendChild(span1);
        div.appendChild(img);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(website);
        spotlightContainer.appendChild(div);
        i++;
    });
   
    
}