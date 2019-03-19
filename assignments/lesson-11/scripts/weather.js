//forecast section of the site
let forecastRequest = new XMLHttpRequest();
var apiURLstringForecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

forecastRequest.open('GET', apiURLstringForecast, true);

forecastRequest.send();

var output = new Array(0);

forecastRequest.onload = function() {
var forecastData = JSON.parse(forecastRequest.responseText);
for (var i= 0; i < forecastData.list.length; i++){
var time = forecastData.list[i].dt_txt;
    if (time.includes("18:00:00")) {
    var result = output.push(forecastData.list[i]);
    
    }
    
}  
console.log(output);

    //repeat parts of the information
    var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
//fill first day information
   //the day of the week in the forecast table
   var forecastDate = output[0].dt_txt;
    forecastDate = new Date(forecastDate);
    var forecastDay = weekday[forecastDate.getDay()]; 
    document.getElementById("forecastDay1").innerHTML = forecastDay;

    //icon for the weather forecast
    var forecastIcon = output[0].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL = "http://openweathermap.org/img/w/" + forecastIcon + ".png";
    document.getElementById("forecast1icon").src = iconURL;
   
    
    //forecast temperature
    var forecastTemp = output[0].main.temp_max;
    document.getElementById("forecastDay1Temp").innerHTML = forecastTemp;
    
//second day information
    //the day of the week in the forecast table
 var forecastDate1 = output[1].dt_txt;
    forecastDate1 = new Date(forecastDate1);
    var forecastDay1 = weekday[forecastDate1.getDay()]; 
    document.getElementById("forecastDay2").innerHTML = forecastDay1;

    //icon for the weather forecast
    var forecastIcon1 = output[1].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL1 = "http://openweathermap.org/img/w/" + forecastIcon1 + ".png";
    document.getElementById("forecast2icon").src = iconURL1;
   
    
    //forecast temperature
    var forecastTemp1 = output[1].main.temp_max;
    document.getElementById("forecastDay2Temp").innerHTML = forecastTemp1;
    
//third day information
//the day of the week in the forecast table
 var forecastDate2 = output[2].dt_txt;
    forecastDate2 = new Date(forecastDate2);
    var forecastDay2 = weekday[forecastDate2.getDay()]; 
    document.getElementById("forecastDay3").innerHTML = forecastDay2;

    //icon for the weather forecast
    var forecastIcon2 = output[2].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL2 = "http://openweathermap.org/img/w/" + forecastIcon2 + ".png";
    document.getElementById("forecast3icon").src = iconURL2;
   
    
    //forecast temperature
    var forecastTemp2 = output[2].main.temp_max;
    document.getElementById("forecastDay3Temp").innerHTML = forecastTemp2;
// fourth day information
//the day of the week in the forecast table
 var forecastDate3 = output[3].dt_txt;
    forecastDate3 = new Date(forecastDate3);
    var forecastDay3 = weekday[forecastDate3.getDay()]; 
    document.getElementById("forecastDay4").innerHTML = forecastDay3;

    //icon for the weather forecast
    var forecastIcon3 = output[3].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL3 = "http://openweathermap.org/img/w/" + forecastIcon3 + ".png";
    document.getElementById("forecast4icon").src = iconURL3;
   
    
    //forecast temperature
    var forecastTemp3 = output[3].main.temp_max;
    document.getElementById("forecastDay4Temp").innerHTML = forecastTemp3;
//fifth day information 
    //the day of the week in the forecast table
 var forecastDate4 = output[4].dt_txt;
    forecastDate4 = new Date(forecastDate4);
    var forecastDay4 = weekday[forecastDate4.getDay()]; 
    document.getElementById("forecastDay5").innerHTML = forecastDay4;

    //icon for the weather forecast
    var forecastIcon4 = output[4].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL4 = "http://openweathermap.org/img/w/" + forecastIcon4 + ".png";
    document.getElementById("forecast5icon").src = iconURL4;
   
    
    //forecast temperature
    var forecastTemp4 = output[4].main.temp_max;
    document.getElementById("forecastDay5Temp").innerHTML = forecastTemp4;
    
}


/*function filterTable(time){
var result = output.filter(time.includes("18:00:00"));
}*/

//output = forecastData.list[i];
//console.log(output);

   /* //the day of the week in the forecast table
   var forecastDate = forecastData.list[0].dt_txt;
    forecastDate = new Date(forecastDate);
    //var forecastDay = forecastDate.getDay();
    var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var forecastDay = weekday[forecastDate.getDay()]; 
    document.getElementById("forecastDay1").innerHTML = forecastDay;
    
    
    
//icon for the weather forecast
    var forecastIcon = forecastData.list[0].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL = "http://openweathermap.org/img/w/" + forecastIcon + ".png";
    document.getElementById("forecast1icon").src = iconURL;
   
    
//forecast temperature
    var forecastTemp = forecastData.list[0].main.temp_max;
    document.getElementById("forecastDay1Temp").innerHTML = forecastTemp;*/