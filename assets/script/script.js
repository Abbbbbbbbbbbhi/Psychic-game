let RightKey;
let allkeys = "abcdefghijklmnopqrstuvwxyz".split("");
let guessedkeys = [];
let wins = 0;
let losses = 0;
let guesses = 9;
let val = true;
let stopfromguessing = false;

newRandKey();
setInterval(function(){
    if(val){
        document.body.style.color = "red";
        val = !val;

    }
    else{
        document.body.style.color = "green";
        val = !val;

    }

}, 0);
addEventListener("keypress", function(event){

    if(guessedkeys.indexOf(event.key) > -1 || stopfromguessing){
        this.console.log(event.key)
        this.console.log("key was already guessed");
        
    }
    else{
        guessedkeys.push(event.key);
        this.document.getElementById("yourguesses").append(event.key);
        if(event.key == RightKey){
            incrementValue("win");
            this.document.getElementById("guess").textContent = 0;
            newRandKey();
            this.document.getElementById("yourguesses").textContent = "";
            guessedkeys = [];
            this.document.body.style.color = "red";
            this.document.body.style.background = "green";
            stopfromguessing = true;
            setTimeout(() => {
                stopfromguessing = false;
                this.document.body.style.color = "white";
                this.document.body.style.background = "black";
            }, 1000);
        }
        else{
            let i = this.document.getElementById("guess").textContent++;
            if(i > 8){
                this.document.getElementById("guess").textContent = 0;
                incrementValue("loss");  
                this.document.getElementById("yourguesses").textContent = "";
                guessedkeys = [];
                newRandKey();

            }
        }
    }
    if(event.key == RightKey){
        incrementValue("win");
    }
    else{
        
    }
});
function incrementValue(classname){
    let element = this.document.getElementById(classname);
    element.textContent++
}
function newRandKey(){
    RightKey = allkeys[Math.floor(Math.random() * 26)];
    console.log(RightKey);
}