let weatherRequest = new XMLHttpRequest();
//create an "apiURLstring" variable that stores the API call URL
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial"
    
    //"api.openweathermap.org/data/2.5/weather?id=5604473"

//call the open method of the weatherRequest  
weatherRequest.open('GET', apiURLstring, true);

//send the request using weatherRequest.send 
weatherRequest.send();

//wait for the request object to load, use the onload method to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    var weatherTemp = weatherData;
    
    weatherTemp = weatherData.main.temp;
    
    document.getElementById("current-temp").innerHTML = weatherTemp;
    
}