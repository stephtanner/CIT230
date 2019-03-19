//current weather section of the site
    let weatherRequestFish = new XMLHttpRequest();
    //create an "apiURLstring" variable that stores the API call URL
    var apiURLstringFish = "http://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

    //call the open method of the weatherRequest  
    weatherRequestFish.open('GET', apiURLstringFish, true);

    //send the request using weatherRequest.send 
    weatherRequestFish.send();

    //wait for the request object to load, use the onload method to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter
    weatherRequestFish.onload = function() {
        let weatherData = JSON.parse(weatherRequestFish.responseText);

    //Weather Summary Section
    var weatherTempFish = weatherData.main.temp;
    document.getElementById("tempFish").innerHTML = weatherTempFish;
    
        var windSpeedFish = weatherData.wind.speed;
    document.getElementById("windFish").innerHTML = windSpeedFish;
    
    //windchill for the Current Weather 
    var f = 35.74 + (0.6215 * weatherTempFish) - (35.75*(Math.pow(windSpeedFish, 0.16))) + (0.4275*(weatherTempFish*(Math.pow(windSpeedFish, 0.16))));
    var ans = f.toFixed(2);
    document.getElementById("windchillOutputFish").innerHTML = ans;

    
    var humidity = weatherData.main.humidity;
    document.getElementById("humidityFish").innerHTML = humidity;
    
    var currently = weatherData.weather[0].main;
    document.getElementById("currentlyFish").innerHTML = currently;
    
}