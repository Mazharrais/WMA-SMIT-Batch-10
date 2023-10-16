var text = document.getElementById('text')
var val2="";
function abc(val){
 val2 = val
    var image = document.getElementById("backgroundpic");
    console.log(val)
    image.style.backgroundImage = `url('${val}')`


    if(val === 'iimages/julamukhi.jpg' || 'images/gathering.jpeg' ||'images/pic5.webp'){
        text.style.color = "white";
     } else {
        text.style.color = "black";
     }
}

function changeButton(){
    var doc =document.getElementById('post');
    if(text.value){
        doc.style.backgroundColor ='rgb(52, 128, 154)'

    }else{
        doc.style.backgroundColor ='grey'
                 
    }
}
function post(){
    console.log(val2);
    var doc = document.getElementById('post1')
    doc.innerHTML += `<div style='background-image:url("${val2}")' class="post1" id="post1">
    <h1>${text.value}</h1>
</div>`
text.value = ""
}