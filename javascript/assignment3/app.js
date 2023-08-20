// *******Q .1********




var myArray = [""];
console.log(myArray)


// *********Q .02*********

var myArray = ["mazhar"];
myArray.pop()
console.log(myArray)

// ********Q .03********

var classStudent = ["ubaid","talha","sanaullah"]
console.log(classStudent)


// ********Q .04*********

var numberArray = ['1','2','3','4','5'];
console.log(numberArray)

// ********Q .05*********

var booleanArray = ["mazhar","ahmed","zain"];
console.log(booleanArray[0])

        //    OR

    // var booleanArray = [" "]    
    // console.log(booleanArray)


    // *******Q .06********

    var mixedArray = ["mazhar","ahmed",1,2];
    console.log(mixedArray)


    // *******Q .07*******


    var qualification = [("<h3>" + "SSC" + "<br>" +
    "HSC" + "<br>" + "BCS" + "<br>" + "BSC" + "<br>" + "BCOM" + "<br>" + "MS" + "<br>" + "M.phil" + "<br>" +
    "Phd" + "</h3>")]
    document.write("<h1>" + "Qualification :" + "</h1>" + "<br>" +
    "<br>" +
    "<h3>" + qualification)


    // ********Q .08*******

    var studentName = ["Mazhar","Taha","Daniyal"];
    var studentScore = [320,230,480];
    document.write("<h3>" + "Score of " + (studentName[0]) + " is " + (studentScore[0]) + " and  Percentage is 64%..." +
    "<br>" + "Score of " + (studentName[1]) + " is " + (studentScore[1]) + " and  Percentage is 46%..." + "<br>" +
    "Score of " + (studentName[2]) + " is " + (studentScore[2]) + " and  Percentage is 96%..." + "</h3>")
    

    // *******Q .09********

// (a)

    var colorNames = ["Green","blue","red"];
    var newColor = prompt ("Enter any color name here");
    var addColor = colorNames.unshift(newColor); 
     document.write(colorNames)

//  (b)   

var colorNames = ["Green","blue","red"];
var newColor = prompt ("Enter any color name here");
var addColor = colorNames.push(newColor); 
 document.write(colorNames)

// (c)

var colorNames = ["Green","blue","red"];
var newColors = prompt ("Enter any color name here");
var addColor = colorNames.unshift(newColors); 
 document.write(colorNames)

// (d)

var colorNames = ["Green","blue","red"];
var firstColor =colorNames.shift() 
 document.write(colorNames) 

// (e)

var colorNames = ["Green","blue","red"];
var addColor = colorNames.pop(colorNames); 
 document.write(colorNames)

// (f)

var colorNames = ["Green","blue","red"];
var addColor = colorNames.splice(1,0,"Indigo"); 
 document.write(colorNames)

// (g)

var colorNames = ["Green","blue","red"];
var addColor = colorNames.splice(1,1,"Indigo"); 
 document.write(colorNames)


// ********Q .10*******

var studentScore = [320,230,480,120];
var orderStore = studentScore.sort();
document.write(studentScore)


// *******Q .11********

var citiesName = ["Karachi","Lahore","Islamabad","Hyderabad","Peshawar"];
var copyArr = citiesName.slice(1,4);

document.write("<h3>" + "Cities List" + "<br>" + citiesName + "<br>" + "<br>" +
"Slected Cities List" + "<br>" + copyArr + "</h3>")


// *******Q .12******

var a = ["This","is","my","cat"];
var b = a.join(" ");
document.write("<h2>" + "Array" + "<br>" + a + "<br>" + "<br>" + "String.." + "<br>" + b)


// ******Q .13******

var array = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Mouse","Printer","Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)



var array = ["Printer","Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)



var array = ["Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


// ******Q .14******



var array = ["Keyboard","Mouse","Printer","Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard","Mouse","Printer"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard","Mouse",];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)