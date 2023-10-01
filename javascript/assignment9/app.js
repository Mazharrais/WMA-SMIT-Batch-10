var text = document.getElementById('text')
function abc(val){
//  if(val=== 'images/background pic 7.jpg' || 'images/download.jpg' ||'images/pic5.webp'){
//     style.color = "white";
//  } else {
//     style.color = "black";
//  }
    var image = document.getElementById("backgroundpic");
    console.log(val)
    image.style.backgroundImage = `url('${val}')`
}

function changeButton(){
    var doc =document.getElementById('post');
    if(text.value){
        doc.style.backgroundColor ='rgb(52, 128, 154)'

    }else{
        doc.style.backgroundColor ='grey'
                 
    }
}