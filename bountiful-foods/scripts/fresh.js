const ingredientSelection1 = document.querySelector("#fruits1");
const ingredientSelection2 = document.querySelector("#fruits2");
const ingredientSelection3 = document.querySelector("#fruits3");

let data = [];



async function getFruitData(){
    const response = await fetch("fruit.json");
    data = await response.json();
    getFruits(data);
}


function getFruits(data){
    data.forEach((fruit) => {
        let option = document.createElement("option");
        option.setAttribute("value",`${fruit.name}`);
        option.setAttribute("name", `${fruit.name}`);
        option.textContent = `${fruit.name}`;
        ingredientSelection1.appendChild(option);
        ingredientSelection2.appendChild(option.cloneNode(true));
        ingredientSelection3.appendChild(option.cloneNode(true));
    });
}

getFruitData();


const order = document.querySelector("#form-order");
const results = document.querySelector(".form-results");
document.querySelector("#orderDate").value = new Date();
const submitBtn = document.querySelector("#submitBtn");

order.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const tel = document.querySelector("#tel").value;
    const orderDate = document.querySelector("#orderDate").value;
    const fruit1 = document.querySelector("#fruits1").value;
    const fruit2 = document.querySelector("#fruits2").value;
    const fruit3 = document.querySelector("#fruits3").value;
    let specialInstructions = document.querySelector("#special-instructions").value;
    if (specialInstructions === "") {
        specialInstructions = "No special instructions";
    }
    let summary = document.createElement("p");
    summary.innerHTML = `Name: ${name}<br>
    Email: ${email}<br>
    Phone Number: ${tel}<br>
    Your Fruit Selection:<br>
    Fruit #1: ${fruit1}<br>
    Fruit #2: ${fruit2}<br>
    Fruit #3: ${fruit3}<br>
    Special Instructions: ${specialInstructions}<br>
    Nutritional Facts:<br>
    ${calculateFruitData(fruit1, fruit2, fruit3)}
    Order Date: ${orderDate}<br>
    `;
    summary.classList.add("order-details");
    results.appendChild(summary);
    submitBtn.classList.add("disabled-button");
    submitBtn.disabled = true;
    const backBtn = document.createElement("a");
    backBtn.setAttribute("href", "index.html");
    backBtn.setAttribute("class","call-to-action");
    backBtn.textContent = "Back to homepage";
    results.appendChild(backBtn);

    results.style.display = "block";
});


function calculateFruitData(fruit1, fruit2, fruit3){
    const filteredFruits =  data.filter((fruit)=>{
        if (fruit.name === fruit1){
            return fruit;
        }
        if (fruit.name === fruit2){
            return fruit;
        }
        if (fruit.name === fruit3){
            return fruit;
        }
    });
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
    filteredFruits.forEach(fruit => {
        carbs = carbs + fruit.nutritions.carbohydrates;
        protein = protein + fruit.nutritions.protein;
        fat = fat + fruit.nutritions.fat;
        sugar = sugar + fruit.nutritions.sugar;
        calories = calories + fruit.nutritions.calories;
    });
    return `Carbohydrates: ${carbs.toFixed(1)}<br>
    Protein: ${protein.toFixed(1)}<br>
    Fat: ${fat.toFixed(1)}<br>
    Sugar: ${sugar.toFixed(1)}<br>
    Calories: ${calories.toFixed(1)}<br>`;
}