console.log("JS is working");


function getWeather(){

const city = document.getElementById("city").value;

const apiKey = "d7b35a863a82a4cf0ff76df903a0e36a";

const url = "https://api.openweathermap.org/data/2.5/weather?q="
+ city +
"&appid=" + apiKey +
"&units=metric";

fetch(url)

.then(response => response.json())

.then(data => {

document.getElementById("weatherResult").innerHTML =
"<h3>"+ data.name +"</h3>" +
"<p>Temperature: "+ data.main.temp +" °C</p>" +
"<p>Weather: "+ data.weather[0].description +"</p>" +
"<p>Humidity: "+ data.main.humidity +"%</p>";

})

.catch(error => {

document.getElementById("weatherResult").innerHTML =
"City not found";

});

}