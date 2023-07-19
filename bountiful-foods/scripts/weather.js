// Weather API

// Define Web Elements

const weatherLocation = document.querySelector("#weather-location");
const weatherTemp = document.querySelector("#weather-temperature");
const weatherImg = document.querySelector("#weather-description-picture");
const weatherDescription = document.querySelector("#weather-description");
const weatherHumidity = document.querySelector("#weather-humidity");
const forecasts = document.querySelector("#forecast");
const weatherContainer = document.querySelector(".weather-container");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=metric&appid=c91da9c77cbb80dc8e18f5d7ded9103a";



const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=metric&appid=c91da9c77cbb80dc8e18f5d7ded9103a`;

async function getWeatherData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        alert("Unfortunately the Weather Service from the site is not working");
    }
};

async function getForecastData(){
    try {
        const response = await fetch(urlForecast);
        if (response.ok){
            const data = await response.json();
            displayForecast(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        alert("Unfortunately the Weather Service from the site is not working");
    }
};


function displayData(data){
    weatherLocation.textContent = `${data.name}`;
    weatherTemp.textContent = `${data.main.temp.toFixed()}°`;
    weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    weatherImg.setAttribute("alt", `${data.weather[0].description}`);
    weatherDescription.textContent = `${data.weather[0].description}`;
    weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
}



function displayForecast(data){
    let dayCount = 1;
    for (let index = 0; index < 3; index++) {
        let div = document.createElement("div");
        div.classList.add("forecast-day");
        let day = document.createElement("span");
        day.textContent = `${convertToDay(data.list[dayCount].dt_txt)}`;
        let temperature = document.createElement("span");
        temperature.classList.add("forecaste-temp");
        temperature.textContent = `${data.list[dayCount].main.temp.toFixed(1)}°`;
        let br = document.createElement("br");
        div.appendChild(day);
        div.appendChild(br);
        div.appendChild(temperature);
        forecasts.appendChild(div);
        dayCount = dayCount + 8;
    }
}



function convertToDay(givenDate){
    let day = new Date(givenDate);
    let month = months[day.getMonth()];
    let dayNumber = day.getDate();
    return `${month} ${dayNumber}`;
}

function setWeatherBackground(){
    let hours = new Date().getHours();
    if (hours > 20 || hours < 7){
        weatherContainer.classList.add("night");
    } else {
        weatherContainer.classList.remove("night");
    }
}

// Initiate functions
setWeatherBackground();
getForecastData();
getWeatherData();

