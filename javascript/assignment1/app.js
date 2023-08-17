

// *********************chap-1*********************************


var firstName = " Error ! please enter a valid password";

alert(firstName);



var secondName = " Java Script Alert.. \n\n\n Wellcome to Js land \n Happy Coding";

alert(secondName);



var thirdName = " Java Script Alert.. \n\n\n Hello i can run js through my web browser's console \n Happy Coding";

console.log(thirdName);

// ***************************chap-2***************************

var userName = "";

alert(userName)
var myName = "Mazhar Ahmed";
alert(myName)
var message = "well come to cruppt country Pakistan";
alert(message)
var message12 = "Hello World";
alert(message12)



var one = "pizza\npizz\npiz\npi\np";
alert(one)

var email = "my email address is mazharmajo72@gmail.com";
alert(email)

var book = "A smarter way to learn Java Script "
alert("I am trying to learn from the book " + book)

var text = "Yah! I can write HTML content through Java Script"
document.write("<h1>" + text + "</h1>")
 var yes = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
 alert(yes)


// **************chap-3*************************


var age = "I am 27 year old";
alert(age)

var visit = "You have visited this site"

var time = "14 times"
alert(visit+time)

var birthYear = "My birth year is april 1995";
var birthYear12 = " Data type of my declared varivable number is"
document.write("<h1>" + birthYear +"<br>" + birthYear12 + "</h1>")


var visitorName = "Mazhar Ahmed"
var quantity = "Ordered 5 T-shirt(s)"
var productTitle = "on YXZ Clothing store..."

document.write("<h1>" + visitorName +  quantity + productTitle + "</h1>")


// ***************chap-4****************

var introPart1 = "Hi This is Mazhar Ahmed";
var introPart2 = "and i'm 27 year old";
var introPart3 = "currently i'm doing Web And Mobile App development course from a very popular insititue in Pakistan name : SMIT";

document.write(introPart1 + " "+ introPart2 + " "+ introPart3)

var legalVariable = "firstName.\nfirst_Name.\nfirstname.\nfirstname123.."
var illegalVariable = "123firstname.\nfirst name.\nfirstname&@first.\nfirst-name.."

document.write("<h1>" + legalVariable + "<br>" + illegalVariable + "</h1>")


var headingText = "“Rules for naming JS variables”"
var textLine1 = "Variable names can only contain, numbers ,$ and _. For example $my_1stVariable"
var textLine2 = "Variables must begin with a letter, $ or _ For example $name, _name or name"
var textLine3 = "Variable names are case sensitive"
var textLine4 = "Variable names should not be JS keyword"

document.write("<h1>" + headingText + "</h1>" + "<br>" + textLine1 + "<br>" + textLine2 + "<br>" + textLine3 + "<br>" + textLine4)



// *********************chap-5**********************


var num = 3;
var num1 = 5 ;
document.write(num + num1)


var num = 3 * 5
document.write(num)

var num = 3 - 5
document.write(num)

var num = 3/5
document.write(num)


  var num = "" ;
document.write(num)

var num = "initial value is 5";
document.write(num)

var num = 5;
var result = num ++ ;
console.log (result);
console.log (num)
 var num1 = 7;
 document.write(num + num1)
 var result1 = num--
 console.log (result1)
 console.log (num1) 
console .log ((num + num1) % 3)


var costTicket = 600 * 5
document.write( "Total Cost to buy 5 ticket to a movie  is "+ costTicket)

var table = 4

document.write("table of 4" + "<br>" + "4 x 1" + "=" + table * 1 + "<br>" + "4 x 2" + "=" + table * 2 + "<br>" + "4 x 3" + "=" + table * 3 + "<br>" + "4 x 4" + "=" + table * 4 + "<br>" + "4 x 5" + "=" + table * 5 + "<br>" + "4 x 6" + "=" + table * 6 + "<br>" + "4 x 7" + "=" + table * 7 + "<br>" + "4 x 8" + "=" + table * 8 + "<br>" + "4 x 9" + "=" + table * 9 + "<br>" + "4 x 10" + "=" + table * 10)

var temp = 25
 document.write(temp + "°C" + " is " + ((temp * 9 / 5 ) + 32) +"°F" )

var temp1 = 70
document.write(temp1 + "°F" + " is " + ((temp1 - 32 ) * 5 / 9) +"°C" )

document.write(temp + "°C" + "is" + ((temp * 9 / 5) + 32) + "°F" + "<br>" + temp1 + "°F" + "is" + ((temp1 - 32) * 5 / 9) +"°C")

var priceofitem1 = 650 ;
var priceofitem2 = 100 ;
var orderedquantityofitem1 = 3 ;
var orderedQuantityofitem2 = 7 ;
var shippingCharges = 100 ;

document.write("Total Cost of your order is " + ((priceofitem1 * orderedquantityofitem1) + (priceofitem2 * orderedQuantityofitem2) + shippingCharges))
 
var totalMarks = 980
var marksObtained = 804
document.write("<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "Total Marks is :" + totalMarks + "<br>" + "Marks Obtained is:" + marksObtained + "<br>" + "Percentage:" + (( marksObtained * 100) / totalMarks))

var usDollars = 10
var saudiCurrency = 25
document.write("<h1>" + "Currency in PKR" + "</h1>" + "<br>" + "Total currency in PKR :" + ((104.80 * usDollars) + (28 * saudiCurrency))) 

var program = 2 ;
document.write(((program + 5) * 10) / 2)

var radius = 20;
document.write("The Geometrizer" + "<br>" + "<br>" + "Radius of a Circle :" + radius + "<br>" + "The Circumference is :" + (2 * 3.142 * radius) + "<br>" + "The area is " + (3.142 * (Math.pow(radius, 2))));


var snack = "Lays" ;
var currentAge = 30 ;
var maxAge = 50;
var eatPerDay = 2;

document.write("<h1>" + "The lifetime supply calculator" + "</h1>" + "<br>" + "<br>" + "Favourite Snack :" + snack + "<br>" + "Current Age:" + currentAge + "<br>" +
"Amount of Snacks per Day:" + eatPerDay + "<br>" + "You will need " + ((maxAge - currentAge) * eatPerDay) + " " + snack + 
" to last you until the ripe old age of " + maxAge);