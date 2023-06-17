async function getData() {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

getData();

const mainContainer = document.querySelector(".members-container");

function displayMembers(members) {    
    members.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("card");
        let titleName = document.createElement("h3");
        titleName.textContent = `${member.name}`;
        let logo = document.createElement("img");
        logo.setAttribute("src", `${member.logo}`);
        logo.setAttribute("alt", `${member.name} logo picture`);
        logo.setAttribute("loading", "lazy");
        let address = document.createElement("span");
        address.textContent = `${member.address}`;
        let phone = document.createElement("span");
        phone.textContent = `${member.phone}`;
        let website = document.createElement("a");
        website.setAttribute("href", `${member.website}`);
        website.textContent = "Website Link";
        let membershipLevel = document.createElement("span");
        membershipLevel.textContent = `${member.membershipLevel}`;
        membershipLevel.style.display = "none";
        membershipLevel.classList.add("membership");
        let memberSince = document.createElement("span");
        memberSince.textContent = `Member since: ${member.memberSince}`;

        card.appendChild(titleName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(memberSince);

        mainContainer.appendChild(card);
    });
}

const listBtn = document.querySelector("#listBtn");

listBtn.addEventListener("click", () =>{
    mainContainer.classList.add("list");
});

const gridBtn = document.querySelector("#gridBtn");

gridBtn.addEventListener("click", () =>{
    mainContainer.classList.remove("list");
});