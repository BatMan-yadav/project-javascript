const box = document.querySelectorAll(".color-box")
box.forEach(function(item){
    item.addEventListener("click", function(e){
        if(e.target.id === "grey"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "pink"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "orange"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "aqua"){
            document.body.style.backgroundColor = e.target.id
        }
    })
})