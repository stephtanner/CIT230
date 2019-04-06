//store url of json we want to retreive in a variable 
//var requestURL = 'temples.json'; 

//create request with new request object instance 
var request = new XMLHttpRequest(); 
request.overrideMimeType("application/json")
//open new request using open() method 
request.open('GET', '../json/temples.json', true); 

//here we are setting the responseType to json 
//tells that this should be converted behind sceens to JavaScript object 
request.responseType = 'json'; 
request.send(); 

//waiting for the response to return from the server 
request.onload = function() { 
var townData = request.response;
    populateClosures(townData);

    
    
 function populateClosures(jsonObj){
    var templeID = " ";
     var temples = ["Kiev", "Preston", "Antonio", "Monticello"];
        for (var i = 0; i < temples.length; i++){
            var templeID = temples[i] + "closureList";
            console.log(templeID);
    
            var allData = jsonObj["temples"];
                for (var z = 0; z < allData.length; z++){
                    var number = allData[z].number;
                    var name = allData[z].name;
    
                        if (name === temples[i]){
                  

                            for( var x = 0; x < allData[z].closures.length; x++){
                                var event = document.createElement("p");
                                event.textContent = allData[z].closures[x]; 
                                document.getElementById(templeID).appendChild(event);
                    }   

                }
                }
}
}
}