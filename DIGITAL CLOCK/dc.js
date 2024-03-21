const clock = document.querySelector(".time")
setInterval(function(){
    let time = new Date()
    clock.innerHTML = time.toLocaleTimeString();
    console.log(time.toLocaleTimeString());
    
} , 1000 )