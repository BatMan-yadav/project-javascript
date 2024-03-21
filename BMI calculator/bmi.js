const form = document.querySelector("form")
form.addEventListener("submit", function(e){

    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#mass").value)
    const result = document.querySelector("#result")
    const ctg = document.querySelector("#ctg")
    let bmi
    if(height == "" || height < 0 || isNaN(height)){
        result.innerHTML = "invalid height"
    }

     else if(weight == "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "invalid weight"
    }
    else{
        bmi  = ((weight)/(((height**2)/10000))).toFixed(2)
        result.innerHTML = `your bmi = ${bmi}`
    }
    if(bmi <= 18.5){
        ctg.innerHTML = "you're underweight"
    }
    else if(bmi > 18.5 && bmi <= 24.9){
        ctg.innerHTML = "your bmi is normal"
    }
    else if(bmi >= 25 && bmi <= 29.9){
        ctg.innerHTML = "you're overweight"
        
    }
    
    else if(bmi > 30){
        ctg.innerHTML = "you're obese fatass "

    }


})
