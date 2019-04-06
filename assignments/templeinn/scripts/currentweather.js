//current weather section of the site
var temples = ["Kiev", "Preston", "Monticello", "SanAntonio"];

var param = "";
var templeTemp = "";
var templeWind = "";
var templeWindChill = "";
var templeHumidity = "";
var templeCurrently = "";

for (var i = 0; i < temples.length; i++){
    if (temples[i] === "Kiev"){
        param = "id=703448";
    }
    else if (temples[i] === "Preston"){
        param = "id=2639912";
    }
    else if (temples[i] === "Monticello"){
        param = "id=5543377";
    }
    else if (temples[i] === "SanAntonio"){
        param = "id=4726206";   
    }
createVariables();
 
}
function createVariables(){
    templeTemp = temples[i] + "temp";
    templeWind = temples[i] + "wind";
    templeWindChill = temples[i] + "windchill";
    templeHumidity = temples[i] + "humidity";
    templeCurrently = temples[i] + "currently"; 
    
    displayData(templeTemp, templeWind, templeWindChill, templeHumidity, templeCurrently);
}

function displayData(templeTemp, templeWind, templeWindChill, templeHumidity, templeCurrently){
    var weatherRequest = new XMLHttpRequest();
    //create an "apiURLstring" variable that stores the API call URL
    var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?" + param + "&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

    //call the open method of the weatherRequest  
    weatherRequest.open('GET', apiURLstring, true);

    //send the request using weatherRequest.send 
    weatherRequest.send();

    //wait for the request object to load, use the onload method to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter
    weatherRequest.onload = function() {
        var weatherData = JSON.parse(weatherRequest.responseText);

    //Weather Summary Section
    var weatherTemp = weatherData.main.temp;
    document.getElementById(templeTemp).innerHTML = weatherTemp;
    
        var windSpeed = weatherData.wind.speed;
    document.getElementById(templeWind).innerHTML = windSpeed;
    
    //windchill for the Current Weather 
    var f = 35.74 + (0.6215 * weatherTemp) - (35.75*(Math.pow(windSpeed, 0.16))) + (0.4275*(weatherTemp*(Math.pow(windSpeed, 0.16))));
    var ans = f.toFixed(2);
    document.getElementById(templeWindChill).innerHTML = ans;

    
    var humidity = weatherData.main.humidity;
    document.getElementById(templeHumidity).innerHTML = humidity;
    
    var currently = weatherData.weather[0].main;
    document.getElementById(templeCurrently).innerHTML = currently;
 
    
}
    
}