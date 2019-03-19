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
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
           document.getElementById("prestonTownData").appendChild(townMotto); document.getElementById("prestonTownData").appendChild(yearFounded); document.getElementById("prestonTownData").appendChild(population); document.getElementById("prestonTownData").appendChild(annRain);
        }
        
        else if (name === "Soda Springs"){
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
           document.getElementById("sodaSpringsTownData").appendChild(townMotto); document.getElementById("sodaSpringsTownData").appendChild(yearFounded); document.getElementById("sodaSpringsTownData").appendChild(population); document.getElementById("sodaSpringsTownData").appendChild(annRain);
        }
                else if (name === "Fish Haven"){
            var townMotto = document.createElement('h4');
            townMotto.textContent = towns[i].motto;
            var yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var population = document.createElement('p');
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var annRain = document.createElement('p');
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
           document.getElementById("fishHavenTownData").appendChild(townMotto); document.getElementById("fishHavenTownData").appendChild(yearFounded); document.getElementById("fishHavenTownData").appendChild(population); document.getElementById("fishHavenTownData").appendChild(annRain);
        }
    }
} 

