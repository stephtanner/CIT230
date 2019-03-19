//forecast section of the site
let forecastRequestFish = new XMLHttpRequest();
var apiURLstringForecastFish = "http://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=6a18fdc3fb96886bfb7ee69a25df0b86&units=imperial";

forecastRequestFish.open('GET', apiURLstringForecastFish, true);

forecastRequestFish.send();

var outputFish = new Array(0);

forecastRequestFish.onload = function() {
var forecastData = JSON.parse(forecastRequestFish.responseText);
for (var i= 0; i < forecastData.list.length; i++){
var time = forecastData.list[i].dt_txt;
    if (time.includes("18:00:00")) {
    var result = outputFish.push(forecastData.list[i]);
    
    }
    
}  
console.log(outputFish);

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
   var forecastDate = outputFish[0].dt_txt;
    forecastDate = new Date(forecastDate);
    var forecastDay = weekday[forecastDate.getDay()]; 
    document.getElementById("forecastDay1Fish").innerHTML = forecastDay;

    //icon for the weather forecast
    var forecastIcon = outputFish[0].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL = "http://openweathermap.org/img/w/" + forecastIcon + ".png";
    document.getElementById("forecast1iconFish").src = iconURL;
   
    
    //forecast temperature
    var forecastTemp = outputFish[0].main.temp_max;
    document.getElementById("forecastDay1TempFish").innerHTML = forecastTemp;
    
//second day information
    //the day of the week in the forecast table
 var forecastDate1 = outputFish[1].dt_txt;
    forecastDate1 = new Date(forecastDate1);
    var forecastDay1 = weekday[forecastDate1.getDay()]; 
    document.getElementById("forecastDay2Fish").innerHTML = forecastDay1;

    //icon for the weather forecast
    var forecastIcon1 = outputFish[1].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL1 = "http://openweathermap.org/img/w/" + forecastIcon1 + ".png";
    document.getElementById("forecast2iconFish").src = iconURL1;
   
    
    //forecast temperature
    var forecastTemp1 = outputFish[1].main.temp_max;
    document.getElementById("forecastDay2TempFish").innerHTML = forecastTemp1;
    
//third day information
//the day of the week in the forecast table
 var forecastDate2 = outputFish[2].dt_txt;
    forecastDate2 = new Date(forecastDate2);
    var forecastDay2 = weekday[forecastDate2.getDay()]; 
    document.getElementById("forecastDay3Fish").innerHTML = forecastDay2;

    //icon for the weather forecast
    var forecastIcon2 = outputFish[2].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL2 = "http://openweathermap.org/img/w/" + forecastIcon2 + ".png";
    document.getElementById("forecast3iconFish").src = iconURL2;
   
    
    //forecast temperature
    var forecastTemp2 = outputFish[2].main.temp_max;
    document.getElementById("forecastDay3TempFish").innerHTML = forecastTemp2;
// fourth day information
//the day of the week in the forecast table
 var forecastDate3 = outputFish[3].dt_txt;
    forecastDate3 = new Date(forecastDate3);
    var forecastDay3 = weekday[forecastDate3.getDay()]; 
    document.getElementById("forecastDay4Fish").innerHTML = forecastDay3;

    //icon for the weather forecast
    var forecastIcon3 = outputFish[3].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL3 = "http://openweathermap.org/img/w/" + forecastIcon3 + ".png";
    document.getElementById("forecast4iconFish").src = iconURL3;
   
    
    //forecast temperature
    var forecastTemp3 = outputFish[3].main.temp_max;
    document.getElementById("forecastDay4TempFish").innerHTML = forecastTemp3;
//fifth day information 
    //the day of the week in the forecast table
 var forecastDate4 = outputFish[4].dt_txt;
    forecastDate4 = new Date(forecastDate4);
    var forecastDay4 = weekday[forecastDate4.getDay()]; 
    document.getElementById("forecastDay5Fish").innerHTML = forecastDay4;

    //icon for the weather forecast
    var forecastIcon4 = outputFish[4].weather[0].icon;
     //concat front url + icon name (end of url), have image with and .src = the new url
    var iconURL4 = "http://openweathermap.org/img/w/" + forecastIcon4 + ".png";
    document.getElementById("forecast5iconFish").src = iconURL4;
   
    
    //forecast temperature
    var forecastTemp4 = outputFish[4].main.temp_max;
    document.getElementById("forecastDay5TempFish").innerHTML = forecastTemp4;
    
}