//forecast section of the site
let forecastRequestSoda = new XMLHttpRequest();
var apiURLstringForecastSoda = "http://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

forecastRequestSoda.open('GET', apiURLstringForecastSoda, true);

forecastRequestSoda.send();

var outputSoda = new Array(0);

forecastRequestSoda.onload = function() {
var forecastData = JSON.parse(forecastRequestSoda.responseText);
for (var i= 0; i < forecastData.list.length; i++){
var time = forecastData.list[i].dt_txt;
    if (time.includes("18:00:00")) {
    var result = outputSoda.push(forecastData.list[i]);
    
    }
    
}  
console.log(outputSoda);

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
   var forecastDate = outputSoda[0].dt_txt;
    forecastDate = new Date(forecastDate);
    var forecastDay = weekday[forecastDate.getDay()]; 
    document.getElementById("forecastDay1Soda").innerHTML = forecastDay;

    //icon for the weather forecast
    var forecastIcon = outputSoda[0].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL = "http://openweathermap.org/img/w/" + forecastIcon + ".png";
    document.getElementById("forecast1iconSoda").src = iconURL;
   
    
    //forecast temperature
    var forecastTemp = outputSoda[0].main.temp_max;
    document.getElementById("forecastDay1TempSoda").innerHTML = forecastTemp;
    
//second day information
    //the day of the week in the forecast table
 var forecastDate1 = outputSoda[1].dt_txt;
    forecastDate1 = new Date(forecastDate1);
    var forecastDay1 = weekday[forecastDate1.getDay()]; 
    document.getElementById("forecastDay2Soda").innerHTML = forecastDay1;

    //icon for the weather forecast
    var forecastIcon1 = outputSoda[1].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL1 = "http://openweathermap.org/img/w/" + forecastIcon1 + ".png";
    document.getElementById("forecast2iconSoda").src = iconURL1;
   
    
    //forecast temperature
    var forecastTemp1 = outputSoda[1].main.temp_max;
    document.getElementById("forecastDay2TempSoda").innerHTML = forecastTemp1;
    
//third day information
//the day of the week in the forecast table
 var forecastDate2 = outputSoda[2].dt_txt;
    forecastDate2 = new Date(forecastDate2);
    var forecastDay2 = weekday[forecastDate2.getDay()]; 
    document.getElementById("forecastDay3Soda").innerHTML = forecastDay2;

    //icon for the weather forecast
    var forecastIcon2 = outputSoda[2].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL2 = "http://openweathermap.org/img/w/" + forecastIcon2 + ".png";
    document.getElementById("forecast3iconSoda").src = iconURL2;
   
    
    //forecast temperature
    var forecastTemp2 = outputSoda[2].main.temp_max;
    document.getElementById("forecastDay3TempSoda").innerHTML = forecastTemp2;
// fourth day information
//the day of the week in the forecast table
 var forecastDate3 = outputSoda[3].dt_txt;
    forecastDate3 = new Date(forecastDate3);
    var forecastDay3 = weekday[forecastDate3.getDay()]; 
    document.getElementById("forecastDay4Soda").innerHTML = forecastDay3;

    //icon for the weather forecast
    var forecastIcon3 = outputSoda[3].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL3 = "http://openweathermap.org/img/w/" + forecastIcon3 + ".png";
    document.getElementById("forecast4iconSoda").src = iconURL3;
   
    
    //forecast temperature
    var forecastTemp3 = outputSoda[3].main.temp_max;
    document.getElementById("forecastDay4TempSoda").innerHTML = forecastTemp3;
//fifth day information 
    //the day of the week in the forecast table
 var forecastDate4 = outputSoda[4].dt_txt;
    forecastDate4 = new Date(forecastDate4);
    var forecastDay4 = weekday[forecastDate4.getDay()]; 
    document.getElementById("forecastDay5Soda").innerHTML = forecastDay4;

    //icon for the weather forecast
    var forecastIcon4 = outputSoda[4].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL4 = "http://openweathermap.org/img/w/" + forecastIcon4 + ".png";
    document.getElementById("forecast5iconSoda").src = iconURL4;
   
    
    //forecast temperature
    var forecastTemp4 = outputSoda[4].main.temp_max;
    document.getElementById("forecastDay5TempSoda").innerHTML = forecastTemp4;
    
}