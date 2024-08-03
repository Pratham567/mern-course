async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather123?q=${city}&appid=5aad59a746bec23d65194d32609c2639&units=metric%60`
    const responseVar = await fetch(url);
    if (responseVar.ok) {
        const jsonData = await responseVar.json();
        return jsonData;
    }
    else {
        throw new Error(`Data not fetched from the url ${url}`);
    }
}

function getAndDisplayWeather(city) {
    getWeather(city)
        .then(data => displayWeather(city, data))
        .catch(err => console.log(err));
}

getAndDisplayWeather("Moradabad");

function getAndDisplayWeather1(city) {
    try {
        const weatherData = getWeather(city);
        displayWeather(city, weatherData);
    }
    catch (err) {
        console.log("Error occured while fetching the data");
        console.log(err);
    }
}

function displayWeather(city, weatherData) {
    console.log(city);
    console.log(weatherData);
    // Update the UI using DOM
}
