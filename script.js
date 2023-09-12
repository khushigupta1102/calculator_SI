function compute()
{
var principal = document.getElementById("principal").value;

if(principal !== "")
{
if (principal <= 0){
alert("Enter a positive number");
document.getElementById("principal").focus();
return;
}
}
else{
alert("Enter number Amount..");
return;
}
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;

var dateNow = new Date();
var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

var resultDisplay = document.getElementById("result");
resultDisplay.innerHTML = "<br/> ➔ If you deposit " + "<span class='highlight'>" + principal + "</span> Rupees.<br/>" + "<br>➔ At an interest Rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br/><br/>➔ You will receive an amount of " + "<span class='highlight'>" + interest + "</span> Rupees" + " in the year " + "<span class='highlight'>" + yearNow + "</span>";

var full_Display = document.getElementById("result2");

var t = parseFloat(principal) + parseFloat(interest);
full_Display.innerHTML = "<br/><br/> ➔ Your Total amount is: <span class='highlight'>" +t+ "</span> Rupees.";

}

function SliderValue()
{
var slider = document.getElementById("rate");
var output = document.getElementById("rate_display");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() 
{
output.innerHTML = this.value;
} 
}