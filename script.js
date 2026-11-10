const weatherData = {
    Delhi: {
        temp: 28,
        humidity: 65,
        condition: "Cloudy",
        wind: 7
    },
    Mumbai: {
        temp: 32,
        humidity: 80,
        condition: "Rainy",
        wind: 10
    },
    Haridwar: {
        temp: 24,
        humidity: 55,
        condition: "Clear Sky",
        wind: 5
    },
    Bulandshahr: {
        temp: 26,
        humidity: 60,
        condition: "Sunny",
        wind: 6
    }
};

function getWeather() {

    const city = document.getElementById("city").value.trim();

    const data = weatherData[city];

    if (!data) {
        document.getElementById("weatherResult").innerHTML =
        `<h2>❌ City Not Found</h2>`;
        return;
    }

    document.getElementById("weatherResult").innerHTML = `
        <div class="weather-info">
            <h2>${city}</h2>
            <p>🌡 Temperature: ${data.temp}°C</p>
            <p>💧 Humidity: ${data.humidity}%</p>
            <p>☁ Condition: ${data.condition}</p>
            <p>🌬 Wind: ${data.wind} km/h</p>
        </div>
    `;
}