
//*********Chap-26 to 30********

//*****Q .01********

// var numbers = 3.45214;
// console.log("Numbers :" + numbers);
  
// var roundOff = Math.round(numbers);
// console.log("round Off :" + roundOff);

// var Values = Math.floor(numbers);
// console.log("floor Values :" + Values);

// var values2 = Math.ceil(numbers);
// console.log("Ceil Values :" + values2);


//******Q .02*********

// var numbers = prompt ("Enter any negative floating numbers here");
// console.log("Numbers :" + numbers);

// var roundOff = Math.round(numbers);
// console.log("round Off :" + roundOff);

//  var Values = Math.floor(numbers);
//  console.log("floor Values :" + Values);

//  var values2 = Math.ceil(numbers);
//  console.log("Ceil Values :" + values2);



//********Q .03********

// var numbers = prompt ("Enter any number here");
// var result = Math.abs(numbers);
// document.write("The Absolute Value of " + numbers + " is " + result);


//*******Q .04********

// var dice = Math.floor(Math.random() * 6);
// document.write("Random Dice Value is :" + " " + dice);    



//**********Q .05*********


// var toss = Math.random() * 3;
// var floor = Math.floor(toss);
// if (floor === 2) {
//     alert(floor + " " + "Random coin value is ; Heads");

// } else if (floor === 1) {
//     alert (floor + " " + "Random coin value is : Tails");
// }


//***********Q .06**********

// var randomNumber = Math.random () * 100;
// var result = Math.floor(randomNumber);
// console.log(result);



//*********Q .07*********


// var userInput = prompt ("Enter your weight here");
// document.write("<h5>" + userInput + "</h5>");
 
// var userInput1 = prompt ("Enter your weight here");
// document.write("<h5>" + userInput1 + "</h5>");

// var userInput2 = prompt ("Enter your weight here");
// document.write("<h5>" + userInput2 + "</h5>");

// var userInput3 = prompt ("Enter your weight here");
// document.write("<h5>" + userInput3 + "</h5>");


//**********Q .08*********

// var num = Math.floor(Math.random() * 10);
// console.log(num);
//  var gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log("congratulation your number is Matched");
//   else
//    console.log("Try Again the number was "+gnum);




//***********Chap-31 To -34************

//*******Q .01********

// var now = new Date();
// console.log(now);


//*********Q .02*******

// var d = new Date ();
// var curentMonth = d.getMonth();
// console.log(curentMonth)

//          //OR

//    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//     var d = new Date();
//     var name = month[d.getMonth()];       
// document.write("Current Month is :" + name);



//*********Q .03********


// var date  = new Date ();
// var string = date.toString();
// console.log("Today is :" + string.slice(0,3));


//*********Q .04********

// var currentDate = new Date ();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "sat") {
//     document.write("It's a Fun Day")
// }
// else if (c === "sun") {
//     document.write("It's a Fun Day")
// }
// else if (c === "fri") {
//     document.write("Sorry it's working Day")
// }



//*********Q .05********

// var currentDate = new Date ();
// var b = currentDate.getDate();
// if(b <= '16') {
//     document.write("First Fifteen Days Of the Month");
// }else if (b >= "16") {
//     document.write("Last Days Of the Month")
// }


//********Q .06********

// var d = new Date ();
// var b = d.getHours();
// if (b >= 11) {
//     document.write("It's PM")
// }else if (b <= 11) {
//     document.write("It's AM")
// }


//*********Q .07********
var month = 11; // Dec
var d = new Date(2020, month + 1, 0);
console.log(d.toString()); // last day in Dec