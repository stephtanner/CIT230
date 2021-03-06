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
var townData = request.response;
var mytown = document.getElementById("town").innerHTML;
populateData(townData);
 }

function populateData(jsonObj){ 
var allData = jsonObj["towns"]; 

    for (var i= 0; i < allData.length; i++){
        var name = allData[i].name;
       if (name === mytown){
            for(x=0; x<allData[i].events.length; x++){
                var event = document.createElement("p");
                event.textContent = allData[i].events[x]; 
                document.getElementById("eventsList").appendChild(event);
            }   
            
        }
    }}