//current weather section of the site
var mytown = document.getElementById("town").innerHTML;
var param = "";
    if (mytown === "Fish Haven"){
        param = "lat=42&lon=-111";
    }
    else if (mytown === "Soda Springs"){
        param = "id=5607916";
    }
    else if (mytown === "Preston"){
        param = "id=5604473";
    }

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
    document.getElementById("temp").innerHTML = weatherTemp;
    
        var windSpeed = weatherData.wind.speed;
    document.getElementById("wind").innerHTML = windSpeed;
    
    //windchill for the Current Weather 
    var f = 35.74 + (0.6215 * weatherTemp) - (35.75*(Math.pow(windSpeed, 0.16))) + (0.4275*(weatherTemp*(Math.pow(windSpeed, 0.16))));
    var ans = f.toFixed(2);
    document.getElementById("windchillOutput").innerHTML = ans;

    
    var humidity = weatherData.main.humidity;
    document.getElementById("humidity").innerHTML = humidity;
    
    var currently = weatherData.weather[0].main;
    document.getElementById("currently").innerHTML = currently;
    document.getElementById("currentlyTop").innerHTML = currently;
 
    
}