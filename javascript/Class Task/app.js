
function getNumber(num) {
    var results =document.getElementById("result");
    results.value += num;
}

//set  kar lo isko me namaz ke liye jarha ho yahan 12:55 per jammat ha 

function clearInput() {
    var getResult=document.getElementById("result");
    getResult.value= "";
}
// function clearResult() {
//     var getResult =document.getElementById("checkclear");
//     getResult.value=reset();

// }

function getResult() {
    var result =document.getElementById("result");
    result.value = eval(result.value);
}
