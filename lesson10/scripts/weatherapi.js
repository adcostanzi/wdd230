//const currentTemp = document.querySelector("#current-temp");
//const weatherIcon = document.querySelector("#weather-icon");
//const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=64.835365&lon=-147.776749&units=imperial&appid=c91da9c77cbb80dc8e18f5d7ded9103a";

function displayResults(weatherData){
    //currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const container = document.querySelector(".weather-container");
    const h1 = document.createElement("h1");
    const hr = document.createElement("hr");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
 
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const iconDesc = weatherData.weather[0].description;

    h1.textContent = "OpenWeatherMap.org API Test";
    p.textContent = `The current temperature in Fairbanks, Alaska is ${weatherData.main.temp.toFixed(0)} °F`;
    h2.textContent = "Current Condition Icon";
    image.setAttribute("src", iconSrc);
    image.setAttribute("alt", iconDesc);
    caption.textContent = iconDesc;
    caption.classList.add("capitalize");

    figure.appendChild(image);
    figure.appendChild(caption);
    container.appendChild(h1);
    container.appendChild(hr);
    container.appendChild(p);
    container.appendChild(h2);
    container.appendChild(figure);
    /*weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", iconDesc);
    captionDesc.textContent = iconDesc;
    captionDesc.classList.add("capitalize");*/
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

apiFetch();

