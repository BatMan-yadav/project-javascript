const input = document.querySelector("form")
let atmpt = 10;
const atmVal = document.querySelector(".atmptLeft")
let data = document.querySelector(".data")
const guessNumber = Math.floor(Math.random() * (100))
const pg  = document.querySelector(".pg")
const data2 = document.querySelector(".data2")
let gamePlay =  true
const guessn = document.getElementById("gNum")
function endGame(){
    guessn.value = ""
    guessn.setAttribute("disabled" , "")
    data2.innerHTML = "!!!!!!game over !!!!!!"
}
let pgl = []
function preg(guess){
    guessn.value = ""
    pgl.push(guess)
    pg.innerHTML += `  ${guess} ,`
}
function  newGame(){
    const p = document.createElement("p")
    p.innerHTML = "<span>start new game</span>"
    p.style.height = "30px"
    p.style.width = "150px"
    p.style.fontSize = "20px"
    p.style.borderRadius = "8px"
    p.style.color = "black"
    p.style.paddingLeft = "8px"    
    p.style.backgroundColor = "#F6995C"
    data2.appendChild(p)
}
if(gamePlay){
input.addEventListener("submit",function(e){
    e.preventDefault();
     const guess = parseInt(guessn.value)
    
    if(guess < 0 || guess == "" ||  isNaN(guess) || guess > 100){
        data.innerHTML = "invalid guess"
    }


    else{
        if(atmpt === 1){
            data.innerHTML = "you cannot guesss right number"
            endGame()
            newGame()
        }
        else{
        if(guess < guessNumber){
            data.innerHTML = "YOUR GUESS IS LOW"
            atmpt--;
            atmVal.innerHTML = `attempt left ${atmpt}`
            preg(guess)
        }
        else if(guess > guessNumber){
            data.innerHTML = "your guess is high"
            atmpt--
            atmVal.innerHTML = `attempt left :- ${atmpt}`
            preg(guess)
        }
        else if(guess == guessNumber){
            data.innerHTML = "you guess correct number"
            atmVal.innerHTML = `attempt left ${atmpt}`
            endGame()
            newGame()
        }
    }
}
})
}