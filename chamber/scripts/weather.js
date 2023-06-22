const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#wind-speed");
const windchill = document.querySelector("#windchill");
const weatherPicture = document.querySelector("#weather-picture");
const weatherCaption = document.querySelector("#weather-caption");
const weatherTitle = document.querySelector("#weather-title");
const weatherContainer = document.querySelector(".weather");

function setWeatherBackground(){
    let hours = new Date().getHours();
    if (hours > 20 || hours < 7){
        weatherContainer.classList.add("night");
        weatherContainer.classList.remove("day");
    } else {
        weatherContainer.classList.add("day");
        weatherContainer.classList.remove("night");
    }
}

setWeatherBackground();

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.8948&lon=-97.1415&units=metric&appid=c91da9c77cbb80dc8e18f5d7ded9103a";

async function getData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //call function to display information
            displayData(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        alert("Unfortunately the Weather Service from the site is not working");
    } 
}

function displayData(data){
    temperature.textContent = data.main.temp.toFixed(0);
    windSpeed.textContent = data.wind.speed;
    weatherPicture.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    weatherPicture.setAttribute("alt", `${data.weather[0].description}`);
    weatherCaption.textContent = data.weather[0].description;
    weatherTitle.textContent = data.name;
    // Check condition of temperature and wind speed met
    if (temperature <= 10 && windSpeed >= 4.8)
    {
        const liveWindchill = CalculateWindchill(temperature, windSpeed);
        windchill.textContent = `${liveWindchill}° Celsius`;
    } else
    {
        windchill.textContent = `N/A`;
    }
}
getData();




// Calculates Windchill and rounds decimals to 1
function CalculateWindchill(temp, wind) 
{
    let formula = (13.12 + (0.6215 * temp) - (11.37 * (wind ** 0.16)) + (0.3965 * temp * (wind ** 0.16))).toFixed(1);
    return formula;
}