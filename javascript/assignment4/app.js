// ********Chap-17 t0 20**********
//       ARRAY'S AND LOOP'S

// *******Q .01********

// var array = [ 
//     [ ],
//     [ ],
//     [ ],
//     [ ]
// ];
// console.log(array)


// *******Q .02*******

// var array = [
//     ["0","1","2","3"],
//     ["1", "0", "1", "2"],
//     ["2", "1", "0", "1"]
// ]
// document.write((array[0]) + "<br>" + (array[1]) + "<br>" + (array[2]))


// ********Q .03*********

//  for(var i=1; i <= 10; i++) {
//  document.write( i + "<br>")
//  }


//  *******Q .04*********


// var number = prompt("Enter any number here");
// var length = prompt("Enter length of number here");
// for(var i=1; i <= length; i++) {
// document.write(number + "x" + i + "=" + number*i + "<br>")
// }



// ********Q .05*********


// var array = ["Apple","mango","Banana","Orange","Graps"];
// for(var i=0; i <=array.length; i++) {
//     console.log(array[i])
// }



// ******Q .06******


// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var series = ["2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k"];

// document.write("<h2>" + "Counting :" + "<br>" + "</h2>" + counting + "<br>" + "<h2>" +
// "Reverse Countingc:" + "<br>" + "</h2>" + reverseCounting + "<br>" + "<h2>" +
// "Even :" + "<br>" + "</h2>" + even + "<br>" + "<h2>" + "Odd :" + "<br>" + "</h2>" + odd + "<br>" + "<h2>" +
// "Series :" + "<br>" + "</h2>" + series )



// ******Q .07*******

// var userInput = prompt ("Wellcome to ABC Bakery. what do you want to order");
// var array = ["cake","apple pie","cookie","chips","patties"];
// for(var i=0; i<=array.length; i++) {
// if(userInput === array[i]) {
//     alert("yes it is available at our bakery");
//     break;
// }
// else {
//     alert("Sorry it is not availabe at our bakery ")
// }
// }


// *******Q .08*******

// var a = [24, 53, 28, 91, 12];
// var largest = a[0];

// for(var i=0; i<a.length; i++) {
//     if (a[i] > largest) {
//         largest = a[i];
//     }
   
// }
// console.log(largest);

// *******Q .09*******

// var a = [24, 53, 28, 91, 12];
// var smallest = a[0];

// for(var i=0; i<a.length; i++) {
//     if (a[i] < smallest) {
//         smallest = a[i];
//     }
   
// }
// console.log(smallest);

// ******Q .10*******



// var arr = [5];
// for(var i=1; i <= 20; i++) {
//      document.write(arr*i)
//     }


// ******chap-21 to 25*******


// ********Q .1*********
    //  *****String -Method******

// var firstName = prompt ("Enter your first name here");
// var lastName = prompt ("Enter your last name here");
// var fullName = firstName + lastName ;
// document.write("Assalam Alikum  :" + fullName)



// ******Q .02******

// var userInput = prompt ("Enter your favt mobile model number here");
// var result = userInput.length;
// console.log(result)


// ******Q .03******

// var string = "karachi Pakistan";
// var result = string.indexOf("s");
// console.log(result)


// ******Q .04******

// var string = "Hello World";
// var result = string.lastIndexOf("l");
// console.log(result)


// ******Q .05******

// var string = "Pakistani";
// var result = string.charAt(3);
// console.log(result)


// ******Q .06*******

// var firstName = prompt ("Enter your first name here");
// var lastName = prompt ("Enter your last name here");
// var result = firstName.concat(lastName);
// document.write ("Assalam Alikum  :" + result);


// *******Q .07*******

// var string = "Hyderabad";
// var result = string.replace("Hyder", "Islam");
// document.write ("<h3>" + result + "</h3>");


// ******Q .08*******

// var string = "Ali And Mazha are Best friends. And they play table tennis together... ";
// var result = string.replace(/And/g,"&");
// document.write(result)


// ******Q .09******

// var string = "472";
// var result = string.toString();
// console.log(result)


// ******Q .10******

// var string = "peanuts...";
// var result = string.toUpperCase();
// document.write(result);


// ******Q .11******

// var string = prompt ("Enter any word here");
// var result = string.toUpperCase();
// console.log(result)