// ***************chap-6****************

var num = 10;
document.write("<h1>" + "Result :" + "</h1>"  + "The value of a is :" + num + "<br>" + "<br>" + "<hr>")

var num = 10;
var result = ++num;
document.write("The value of ++a is :11" + "<br>" +
"Now the value of ++a is :" + result + "<br>" + "<br>")

var num = 11;
var result1 = num ++;
 document.write("The value of a++ is :11" + "<br>" + "Now the value of a++ is :" + num + "<br>" + "<br>")

 var num = 12;
var result = --num;
document.write("The value of --a is :11" + "<br>" +
"Now the value of --a is :" + num + "<br>" + "<br>")


var num = 11;
var result1 = num --;
 document.write("The value of a-- is :11" + "<br>" + "Now the value of a-- is :" + num + "<br>" + "<br>")

// 
//  ****************Q.02***************
    

var a = 2;
var b = 1;
var num = --a
document.write("a is :" + num + "<br>")
 

var num1 = --b;
document.write("b is :" + (num - num1) + "<br>")



var num2 = ++b;
document.write("result is :" + ((num - num1) + num2) + "<br>")



var num3 = b--;
document.write("Now the Final result is :" + (num - num1 + num2 + num3)+ "<br>" + "<br>")


// ****************Q.03****************


var userinput = prompt ("Enter your name")
document.write("Assalam Alikum");




// ***********Q.05************

var userinput= prompt ("Enter any number" , "5");
var result =("table of 4" + "<br>" + "4 x 1 = 4" + "<br>"
+ "4 x 2 = 8" + "<br>"
+ "4 x 3 = 12" + "<br>"
+ "4 x 4 = 16" + "<br>"
+ "4 x 5 = 20" + "<br>"
+ "4 x 6 = 24" + "<br>"
+ "4 x 7 = 28" + "<br>"
+ "4 x 8 = 32" + "<br>"
+ "4 x 9 = 36" + "<br>"
+ "4 x 10 = 40" + "<br>")
document.write(result)
  

// ************Q.06************
var subject = "English";
var subject2 = "Mathematics"
var subject3 = "Urdu"
var num = 100;
var num1 = 54;
var num2 = 64;
var num3 = 74;
document.write("<h4>" + "Subject" + "  " +  "  " + "Total Marks" + "  " +  "  " + "Obtained Marks" + "  " +  "  " + "Percentage" + "</h4>" + "<br>"
+ subject + "  " + " " + num + "  " + " " + num1 + "  " + " " + "54%" + "<br>" +
subject2 + " " + " " + num + " " + " " + num2 + " " + " " + "64%" + "<br>" + 
subject3 + " " + " " + num + " " + " " + num3 + " " + " " + "74%" + "<br>" +
"<h5>" + "300" + "  " + "  " + "  " + "  " + "192" + "  " + "64%" + "  " + "</h5>")


// ****************chap-9 t0 11****************

var city = prompt ("Enter your city Name")
if(city == "Karachi"){
    document.write("<h1>" + "“Welcome to city of lights”" + "</h1>")
}


// *****Q .02*****

var gender = prompt ("Enter your gender")
if (gender =="Male") {
  alert ("Good Morning Sir.")
}
if(gender == "Female") {
    alert ("Good Morning Ma’am.")
}
    


// ******Q .03*******

var trafficLights = prompt ("Enter any traffic lights")
if (trafficLights == "red"){
    alert("Must Stop")
}
if (trafficLights == "yellow"){
    alert("Ready to move")
}
if (trafficLights == "green"){
    alert("Move now")
}



// *****Q .04******

var fuelinCar = prompt ("Enter your fuel position")
if (fuelinCar == "If the current fuel is less than 0.25litres,"){
    alert("“Please refill the fuel in your car”")
}

// ****Q .05****

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
var result = b++ ;
console.log(result);
console.log(b)
if (b++ === 83){
    alert("given condition for variable b is true");
    }
 

var c = 12 ;
var result = c++ ;
console.log(result);
console.log(c)
if (c++ === 13){
    alert("condition 1 is true");
    }  

var c = 12 ;
var result = ++c ;
if (result === 13){
    alert("condition 2 is true");
    }

 var c = 12 ;
 var result1 = ++c   
if (result1 < 14){
    alert("condition 3 is true");
}
 
var c = 13 ;
var result2 = ++c ;
if (result2 == 14){
    alert("condition 4 is true")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if ((totalCost === laborCost + materialCost) === true){
    alert("true")
} else {
    alert("false")
}
 
var car = "Big Machine";
var cat = "Small Living Thing";
var result = car < cat ;
if ((cat < cat) === result){
    alert("Car is smaller than Cat")
 }
   


// *******Q .06********

var marksObtained = prompt ("Enter your three subjects marks");
var marksObtained = 192;
var totalMarks = 300;
if ( totalMarks > marksObtained){
document.write ("<h1>" + "Marks Sheet" + "</h1>" + "<br>" + 
   "<h4>" + "Total Marks : 300" + "<br>" +
   "Marks Obtained : 192" + "<br>" +
   "Percentage : 64%" + "<br>" +
   "Grade : B" + "<br>" +
   "Remarks : You need to improve")
 }

// ********Q .07*********





  var userInput = prompt ("Guess the secret number");
  var  secretNumber = (1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10);
  var  secretNumber1 = ( +1 , +2 , +3 , +4 , +5 , +6 , +7 , +8 , +9 , +10);
  if (userInput = "secretNumber"){
    document.write("<h2>" + "Bingo! Correct Answer" + "</h2>")
  } else if (userInput = "secretNumber1") {
    document.write("<h2>" + "Close Enough to the Correct Answer" + "</h2>")
  }
    

  // *******Q .08*******
 

  var userInput = prompt ("Enter any Number");
  var num = 3;
  if (userInput % 3 ==0){
    alert("divisible by 3")
  } else {
    alert("Not-divisible by 3")
  }


  // *******Q .09*******

  var userInput = prompt ("Enter a given number to check either it is even or odd")
  var num = 2;
  if (userInput % 2 ==0){
    alert("The given Number is Even")
  } else {
    alert ("The given Number is Odd")
  }


  // ******Q .10*******

 var userInput = prompt ("Enter your Weather Temperature here");
 var temp = 100 ;
 if (userInput > 40) {
  document.write("“It is too hot outside.”")
 }
 else if (userInput > 30) {
  document.write("“The Weather today is Normal.”")
 }
 else if (userInput > 20) {
  document.write("“Today’s Weather is cool.”")
 }
 else if (userInput > 10) {
  document.write("“OMG! Today’s weather is so Cool.”")
 }
  

// ********Q .11********


var operator = prompt('Enter operator ( either +, -, * or / ): ');

var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number:  '));

switch(operator) {
    case '+':
       var  result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
     var    result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
    var     result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
     var    result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
 }


  // ***************chap-12 to 13****************

  var operator = prompt("enter operator(either number or string)");
  var num1 = "A";
  var num2 = "c";
  var num3 = "F";
  var number = 3 ;
  var number1 = 10 ;
  var result = num3 + num1 + number ;
  document.write ("code :" + result)
  

  // *******Q .02********

  var userInput = prompt ("Write any integers number")
  var num1 = 3;
  var num2 = 7;
  if(userInput < num1) {
    alert(num1)
  }
  if (userInput > num1) {
    alert(num2)
  }
  if(userInput == num2) {
    alert(num2)
  }


  // ********Q .03********


  var userInput = prompt ("write any Positive , Negative and Zero number");
  var num1 = 0;
  
  if (userInput > num1) {
    document.write("<h3>" + "This is positive natural number's" + "</h3>")
  }
  if (userInput === 0) {
    document.write("<h3>" + "This is neither positive nor negative only zero..." + "</h3>")
  }
  if (userInput < num1) {
    document.write("<h3>" + "This is negative natural number's" + "</h3>" )
  }
  

// ********Q .04*******





var userInput = prompt ("Enter any character or string");
var vowel = ["a", "e", "i", "o", "u"];
if (userInput === vowel) {
  alert ("True") } else {
    alert ("False")
  }


// *******Q .05********

 var userInput = prompt ("Enter your  Password");
var userInput2 = prompt ("Again enter your password")
 if (userInput === userInput2) {
  alert("Correct Password")
 } else {
  alert ("Wrong Password")
 }


// ******Q .06******


var userInput = prompt ("Enter your greeting Date or  Hours");
if (userInput < 18) {
  alert ("Good day");
} else {
  alert ("Good evening");
}


// *******Q .07******

var userInput = prompt ("Enter your Good Time here");
var time1 = 12.00 ;
var time2 =  17.00
if(userInput < time1 ) {
  alert("Good Morning")
}
if (userInput === time2) {
  alert("Good Afternoon")
}




