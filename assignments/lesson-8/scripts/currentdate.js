/*var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();*/

var dateData = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = days[dateData.getDay()];

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = month[dateData.getMonth()];

var numericalDay = dateData.getDate();

var year = dateData.getYear();
    if(year < 1000){
        year += 1900
    }

document.getElementById("demo").innerHTML = d+", "+numericalDay+" "+m+" "+year;