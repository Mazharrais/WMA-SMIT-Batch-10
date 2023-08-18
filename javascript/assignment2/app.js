// // ***************chap-6****************

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

// // 
// //  ****************Q.02***************
    


var b = 1;
var num = --a
document.write("a is :" + num + "<br>")
 

var num1 = --b;
document.write("b is :" + (num - num1) + "<br>")



var num2 = ++b;
document.write("result is :" + ((num - num1) + num2) + "<br>")



var num3 = b--;
document.write("Now the Final result is :" + (num - num1 + num2 + num3)+ "<br>" + "<br>")


// // ****************Q.03****************


var userinput = prompt ("Enter your name")
document.write("Assalam Alikum");




// // ***********Q.05************

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
  

// // // ************Q.06************


var subject1 = prompt("Enter your first subject here");
var subject2 = prompt("Enter your second subject here");
var subject3 = prompt("Enter your third subject here");

var marksSubject1 = prompt("Enter obrained marks " + " from " + subject1);
var marksSubject2 = prompt("Enter obrained marks " + " from " + subject2);
var marksSubject3 = prompt("Enter obrained marks " + " from " + subject3);

var totalMarks = 300;
var totalScoredMarks = (+marksSubject1) + (+marksSubject2) + (+marksSubject3)
var percentage = ((totalScoredMarks / totalMarks) * 100 )


if (percentage >= 80){
    
document.write( 
    "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
    "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Percentage:" + " " + percentage + "%" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Grade:" + " " + "A-one" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Remarks:" + " " + "Excellent" + "</td>" + "</tr>" +
    + "</table>"  
)
}

else if (percentage >= 70){
    
    document.write( 
        "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
        "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Percentage:" + " " + percentage +  "%" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Grade:" + " " + "A" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Remarks:" + " " + "Good" + "</td>" + "</tr>" +
        + "</table>"  
    )
    }

else if (percentage >= 60){
    
        document.write( 
            "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
            "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Percentage:" + " " + percentage + "%" +  "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Grade:" + " " + "B" + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Remarks:" + " " + "You need to improve" + "</td>" + "</tr>" +
            + "</table>"  
        )
        }
else if (percentage <= 60){
    
            document.write( 
                "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
                "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Percentage:" + " " + percentage +  "%" + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Grade:" + " " + "Fail" + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Remarks:" + " " + "Sorry" + "</td>" + "</tr>" +
                + "</table>"  
            )
            }


// // ****************chap-9 t0 11****************

var city = prompt ("Enter your city Name")
if(city == "Karachi"){
    document.write("<h1>" + "“Welcome to city of lights”" + "</h1>")
}


// // *****Q .02*****

var gender = prompt ("Enter your gender")
if (gender =="Male") {
  alert ("Good Morning Sir.")
}
if(gender == "Female") {
    alert ("Good Morning Ma’am.")
}
    


// // ******Q .03*******

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

// // ****Q .05****

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
   


// // *******Q .06********

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

// // ********Q .07*********

  var userInput = prompt ("Guess the secret number");
var num33 = 11;
  if (userInput >= 1 && userInput <=10){
    document.write("<h2>" + "Bingo! Correct Answer" + "</h2>")
  } 
 else if (userInput === num33) {
    document.write("<h2>" + "Close Enough to the Correct Answer" + "</h2>")
  }
  else {
    alert("Chal bhai kahen or ja kr hacking kr")
  }
    

//   // *******Q .08*******
 

  var userInput = prompt ("Enter any Number");
  var num = 3;
  if (userInput % 3 ==0){
    alert("divisible by 3")
  } else {
    alert("Not-divisible by 3")
  }


//   // *******Q .09*******

  var userInput = prompt ("Enter a given number to check either it is even or odd")
  var num = 2;
  if (userInput % 2 ==0){
    alert("The given Number is Even")
  } else {
    alert ("The given Number is Odd")
  }


//   // ******Q .10*******

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
  

// // ********Q .11********


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


//   // ***************chap-12 to 13****************

  var operator = prompt("enter operator(either number or string)");
  var num1 = "A";
  var num2 = "c";
  var num3 = "F";
  var number = 3 ;
  var number1 = 10 ;
  var result = num3 + num1 + number ;
  document.write ("code :" + result)
  

//   // *******Q .02********

var integer = prompt("Enter first intiger here")
var integer2 =prompt ("Enter second intiger here")

if(integer > integer2) {
    document.write (integer + " " + "is larger than" + " " + integer2)
}
else if(integer2 > integer) {
    document.write (integer2 + " " +"is larger than" + " " + integer)
}
else if(integer === integer2) {
    document.write (integer + " " +  "are equal" + " " + integer2)
}
else {alert("Define a valid number")}


//   // ********Q .03********


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
  

// // ********Q .04*******

var vowel = prompt ("Enter a single alphabat i will define is vowel or not");

if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
    document.write ("The" + " " + vowel + " " + "is a vowel word")
}
else {document.write("The" + " " + vowel + " " + "This is a consonant")}


// // *******Q .05********

 var userInput = prompt ("Enter your  Password");
var userInput2 = prompt ("Again enter your password")
 if (userInput === userInput2) {
  alert("Correct Password")
 } else {
  alert ("Wrong Password")
 }


// // ******Q .06******


var userInput = prompt ("Enter your greeting Date or  Hours");
if (userInput < 18) {
  alert ("Good day");
} else {
  alert ("Good evening");
}


// // *******Q .07******

var time = prompt("Enter your city current time here in hours")

if (time >= 0000 && time < 1200 ){
    Swal.fire("Good Morning")
    }
else if (time >= 1200 && time < 1700 ){
    Swal.fire("Good Afternoon")
  
 }
 else if (time >= 1700 && time < 2100 ){
    Swal.fire("Good Evening")
  } 
 else if (time >= 2100 && time <= 2359 ){
    Swal.fire("Good Night")
    }




