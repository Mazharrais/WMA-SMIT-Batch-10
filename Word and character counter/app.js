var textbox = document.getElementById("text-box");

textbox.addEventListener('input', function(){
    var text = this.value;
    var char = text.length;
    document.getElementById("char").innerHTML = char;



    text = text.trim();
    let words = text.split(" ");
    var cleanList = words.filter(function(elem){
        return elem != "";
    });
    console.log(cleanList);
    document.getElementById("word").innerHTML =cleanList.length;

})