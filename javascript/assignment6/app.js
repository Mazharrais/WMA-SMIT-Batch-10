
//**********CHAP-35 T0 38*********
//*******FUNCTION***********

//*********Q .01*********

// var currentDate = new Date ();
// document.write(currentDate)

         //  Or

// var date = new Date("Dec 05, 2018");
// document.write(date)


//**********Q .02**********

// var userInput = prompt("Enter your first name here");

// var userInput1 = prompt("Enter your last name here");


// function name(a,b) {
//  document.write("Assalam Alikum")
// }
// name(userInput,userInput1)


//*********Q. 03***********

// var userInput = prompt ("Enter your first number here");
// var userInput1 = prompt ("Enter your last number here");

// function num (a,b) {
//     return plus ;
// }
// var plus = num(userInput+userInput1);
// document.write(plus);


// OR

// function num (a,b) {
//     return a+b ;
// }
// var plus = num(10,20);
// document.write(plus);


//***********Q.04**********

// var userInput = prompt ("Enter your First number here");
// var userInput1 = prompt ("Enter your second number here");

// function calc (num1,operator,num2) {
//    if(operator === "+") {
//     return num1+num2;
//    } else if(operator === "-") {
//     return num1-num2;
//    } else if (operator === "*") {
//     return num1*num2;
//    } else if (operator === "/") {
//     return num1/num2
//    } else {
//     return "incorrect Operator"
//    }
// }
// var result = calc(20, "+" ,10);
// document.write(result)


//*********Q. 05**********

// function square(num) {
//     return num*num;
// }
// document.write(square(20));


//**********Q.06***********


// var num = prompt ("Enter any number here");
// var result = num;
// function Abc(val) {
//     for(var i=val-1; i>0; i--) {
//         result = result*i;
//     }
//     return result;
// }
// console.log(Abc(num))


//***********Q. 07**********


// var userInput = prompt("Enter any number here");
// var userInput1 = prompt("Enter any number here");

// function num(a,b) {
//     for( var i=a; i<=b; i++ ){
//         document.write( i );
//       }



//  }
// num(22,40);



// //***********Q. 08***********

function calHyp() {

    var askInput = prompt("Enter any number here");
    var userInput = prompt("Enter any number here");

function calSq() {
    var baseSq = Math.pow(askInput,2);
    var perpSq = Math.pow(userInput,2);
    var result = (baseSq + perpSq) ;
     return result;

}


 document.write(calSq());

var hypSq = (calSq());
document.write(Math.sqrt(calSq()));

// var calHyp = Math.sqrt(hypSq);

//return calHyp ;


}
//  document.write(calHyp());
 



//************Q .09************

//***Arguments As Value*******

// function area(a,b) {
//     return a * b;
// }
// document.write(area(10,5));


//********Arguments as variables*********

// var width = prompt ("Enter any number here");
// var height = prompt ("Enter any number here");
// function variables() {
//     return width * height;
// }
// document.write(variables());


//*********Q .10********

// var word = prompt ("Enter any word here");

// function palaindrome () {
// var a = word.toLowerCase();
// var check = "";
// for(var i=a.length-1; i >= 0; i--){
//     check += a[i];
// }
// if(word === check){
//     document.write(a + " is a Palindrom word");
// } else {
//     document.write(a + " is not a Palindrom word")
// } 

// }
// palaindrome();


//***********Q.11**********

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));



//***********Q.12***********

