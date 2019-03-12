/* 
Take a temperature in Fahrenheit as a parameter
Take a wind speed in miles per hour as a parameter
Calculate the wind chill factor as a temperature in Fahrenheit
Return the wind chill factor in Fahrenheit to output div

The formula for computing the wind chill factor is

f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
where f is the wind chill factor in Fahrenheit, t is the air temperature in Fahrenheit, and s is the wind speed in miles per hour at five feet above the ground. */

var speed = parseFloat(document.getElementById("wind").innerHTML);
var tempF = parseFloat(document.getElementById("temp").innerHTML);

//var speed = 12
//var tempF = 56
var f = 35.74 + (0.6215 * tempF) - (35.75*(Math.pow(speed, 0.16))) + (0.4275*(tempF*(Math.pow(speed, 0.16))))
var ans = f.toFixed(2);
document.getElementById("windchillOutput").innerHTML = ans;