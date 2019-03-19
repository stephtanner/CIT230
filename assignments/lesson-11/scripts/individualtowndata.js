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
var prestonData = request.response; 
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
        else if (name === "Soda Springs"){
            var sevents0 = document.createElement('p');
            var sevents1 = document.createElement('p');
            var sevents2 = document.createElement('p');
            
            sevents0.textContent = allData[i].events[0];
            sevents1.textContent = allData[i].events[1];
            sevents2.textContent = allData[i].events[2];
            document.getElementById("sodaEvents").appendChild(sevents0); document.getElementById("sodaEvents").appendChild(sevents1); document.getElementById("sodaEvents").appendChild(sevents2);
        }
        else if (name === "Fish Haven"){
            var fevents0 = document.createElement('p');
            var fevents1 = document.createElement('p');
            var fevents2 = document.createElement('p');
            
            fevents0.textContent = allData[i].events[0];
            fevents1.textContent = allData[i].events[1];
            fevents2.textContent = allData[i].events[2];
        document.getElementById("fishEvents").appendChild(fevents0); document.getElementById("fishEvents").appendChild(fevents1); document.getElementById("fishEvents").appendChild(fevents2);
                          
        }
    }
} 
