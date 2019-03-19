//current weather section of the site
    let weatherRequestSoda = new XMLHttpRequest();
    //create an "apiURLstring" variable that stores the API call URL
    var apiURLstringSoda = "http://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

    //call the open method of the weatherRequest  
    weatherRequestSoda.open('GET', apiURLstringSoda, true);

    //send the request using weatherRequest.send 
    weatherRequestSoda.send();

    //wait for the request object to load, use the onload method to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter
    weatherRequestSoda.onload = function() {
        let weatherData = JSON.parse(weatherRequestSoda.responseText);

    //Weather Summary Section
    var weatherTemp = weatherData.main.temp;
    document.getElementById("tempSoda").innerHTML = weatherTemp;
    
        var windSpeed = weatherData.wind.speed;
    document.getElementById("windSoda").innerHTML = windSpeed;
    
    //windchill for the Current Weather 
    var f = 35.74 + (0.6215 * weatherTemp) - (35.75*(Math.pow(windSpeed, 0.16))) + (0.4275*(weatherTemp*(Math.pow(windSpeed, 0.16))));
    var ans = f.toFixed(2);
    document.getElementById("windchillOutputSoda").innerHTML = ans;

    
    var humidity = weatherData.main.humidity;
    document.getElementById("humiditySoda").innerHTML = humidity;
    
    var currently = weatherData.weather[0].main;
    document.getElementById("currentlySoda").innerHTML = currently;
    
}