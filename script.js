let weather = {
    apiKey: "4c5676304897b3ff750e089516e645ce",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + "&units=metric&appid=" + appkey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        //variables
        const {name} = data;
        const {icon, description} = data.weather;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector("city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "01n@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind".innerText = "Wind Speed: " + speed + "mph");
    }
};