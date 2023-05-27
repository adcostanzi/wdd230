const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#wind-speed").textContent);
const windchill = document.querySelector("#windchill");


// Check condition of temperature and wind speed met
if (temperature <= 10 && windSpeed >= 4.8)
{
    const liveWindchill = CalculateWindchill(temperature, windSpeed);
    windchill.textContent = `${liveWindchill}° Celsius`;
} else
{
    windchill.textContent = `N/A`;
}

// Calculates Windchill and rounds decimals to 1
function CalculateWindchill(temp, wind) 
{
    let formula = (13.12 + (0.6215 * temp) - (11.37 * (wind ** 0.16)) + (0.3965 * temp * (wind ** 0.16))).toFixed(1);
    return formula;
}