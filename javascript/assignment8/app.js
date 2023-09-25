var left = 0;
function abc() {
  
    var daino = document.getElementById('daino');
    console.log(event.keyCode)
    if(event.keyCode === 39) {
        left = left + 10;
        daino.style.left = left + 'px'
    }
    if(event.keyCode === 37) {
        left = left - 10;
        daino.style.left = left + 'px'
    }
    // var top =
    // function jump(){
        if(event.keyCode === 38) {
    //    top = top + 400;
       daino.style.bottom = '250px'
       setTimeout(function(){
        daino.style.bottom = '10px'
        }, 550);
        // }
        
    }
    
}
window.onkeydown = abc;
  
