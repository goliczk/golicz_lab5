//JS Document


//This function changed Farenheit into Celsius
var Far = 85;
function temp (){
var myTemp = (Far - 32) * (5/9) ;
console.log(myTemp);
}
temp();//runs the function
//if statements for the farenheit
if (Far > 90){
	console.log("Wear shorts");
}
else if (Far>=70){
	console.log("It's Balmy, wear shorts.");
}
else if (Far>=55){
	console.log("It's a little chilly, bring a sweater.");
}
else if (Far>=40) {
	console.log("It's cold, wear a coat");
}
else if (Far<40) {
	console.log("What is wrong with you?? Stay inside!!");
}







