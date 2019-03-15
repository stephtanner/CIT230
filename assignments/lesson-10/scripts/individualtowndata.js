//store url of json we want to retreive in a variable 
var requestURL1 = 'https://byui-cit230.github.io/weather/data/towndata.json'; 

//create request with new request object instance 
var request1 = new XMLHttpRequest(); 

//open new request using open() method 
request1.open('GET', requestURL1); 

//here we are setting the responseType to json 
//tells that this should be converted behind sceens to JavaScript object 
request1.responseType = 'json'; 
request1.send(); 

//waiting for the response to return from the server 
request1.onload = function() { 
var prestonData = request1.response; 
populatePrestonData(prestonData); 
} 

function populatePrestonData(jsonObj){ 
var allData = jsonObj["towns"]; 

    for (var i= 0; i < allData.length; i++){
        var name = allData[i].name;
        if(name === "Preston") {
            var events0 = document.createElement('p');
            var events1 = document.createElement('p');
            var events2 = document.createElement('p');
            
            events0.textContent = allData[i].events[0];
            events1.textContent = allData[i].events[1];
            events2.textContent = allData[i].events[2];
            document.getElementById("prestonEvents").appendChild(events0); document.getElementById("prestonEvents").appendChild(events1); document.getElementById("prestonEvents").appendChild(events2);
        }
        /*else if (name === "Soda Springs"){
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
        }*/
    }
} 
