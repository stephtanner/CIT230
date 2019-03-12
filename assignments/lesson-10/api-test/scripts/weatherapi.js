let weatherRequest = new XMLHttpRequest();
//create an "apiURLstring" variable that stores the API call URL
var apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial"
    
    //"api.openweathermap.org/data/2.5/weather?id=5604473"

//call the open method of the weatherRequest  
weatherRequest.open('GET', apiURLstring, true);

//send the request using weatherRequest.send 
weatherRequest.send();

//wait for the request object to load, use the onload method to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    

    document.getElementById("current-temp").innerHTML = weatherData;
}

/*function populateWeather(jsonObj){
    var currentWeather = jsonObj["properties"];
    for (var i=0; i< currentWeather.length;i++){
        var temperature = document.createElement('p');
        temperature.textContent = properties[i].main;
        
        document.getElementById("current-temp").appendChild(temperature); 
    }
}*/


/*
//store url of json we want to retreive in a variable 
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'; 

//create request with new request object instance 
var request = new XMLHttpRequest(); 

//open new request using open() method 
request.open('GET', requestURL); 

//here we are setting the responseType to json 
//tells that this should be converted behind sceens to JavaScript object 
request.responseType = 'json'; 
request.send(); 

//waiting for the response to return from the server 
request.onload = function() { 
var prestonInfo = request.response; 
populatePreston(prestonInfo) 
} 

function populatePreston(jsonObj){ 
var towns = jsonObj["towns"]; 

    for (var i= 0; i < towns.length; i++){
        var name = towns[i].name;
        if(name === "Preston") {
            var townName = document.createElement('h1');
            townName.textContent = towns[i].name;
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("prestonTownData").appendChild(townName); document.getElementById("prestonTownData").appendChild(townMotto); document.getElementById("prestonTownData").appendChild(yearFounded); document.getElementById("prestonTownData").appendChild(population); document.getElementById("prestonTownData").appendChild(annRain); 
        }
        else if (name === "Soda Springs"){
                        var townName = document.createElement('h1');
            townName.textContent = towns[i].name;
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("sodaSpringsTownData").appendChild(townName); document.getElementById("sodaSpringsTownData").appendChild(townMotto); document.getElementById("sodaSpringsTownData").appendChild(yearFounded); document.getElementById("sodaSpringsTownData").appendChild(population); document.getElementById("sodaSpringsTownData").appendChild(annRain);
        }
                else if (name === "Fish Haven"){
                        var townName = document.createElement('h1');
            townName.textContent = towns[i].name;
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("fishHavenTownData").appendChild(townName); document.getElementById("fishHavenTownData").appendChild(townMotto); document.getElementById("fishHavenTownData").appendChild(yearFounded); document.getElementById("fishHavenTownData").appendChild(population); document.getElementById("fishHavenTownData").appendChild(annRain);
        }
    }
} 
*/