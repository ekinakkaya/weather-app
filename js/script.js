

let weather = {
    "apiKey": "6da975f8f5d2c6349df9a4880abc9f83",
    fetchWeather: function (city) {
        //fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6da975f8f5d2c6349df9a4880abc9f83")
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";

        document.querySelector(".weather").classList.remove("loading");

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
}


document.querySelector(".search button").addEventListener("click", function() {
    document.querySelector(".weather").classList.add("loading");
    weather.search();
});


document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
});

weather.fetchWeather("Ankara")