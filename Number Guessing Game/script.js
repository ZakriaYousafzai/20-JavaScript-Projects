const chk = document.querySelector(".check");
const start = document.querySelector(".start");
const input = document.querySelector(".input");
const h1 = document.querySelector(".txt");
const score = document.querySelector(".score");
const attempts = document.querySelector(".attempts");
let rand;
let scoreCount = 0;
let attemptsCount;

start.addEventListener("click", ()=>{

    start.textContent = "Try Again";
    h1.textContent = "Guess a number between 1 to 100";
    rand = Math.floor(1 + Math.random() * 100);
    attemptsCount = 10;

});

chk.addEventListener("click", ()=>{
    let userInput = input.value;
    
    if( attemptsCount != 0 ) {

        if (userInput > rand) {
            h1.textContent = "Try Lesser";
            scoreCount++;
            attemptsCount--;
            attempts.textContent = `Remainnig attempts: ${attemptsCount}`;

        } else if (userInput < rand) {
            h1.textContent = "Try Greater";
            scoreCount++;
            attemptsCount--;
            attempts.textContent = `Remainnig attempts: ${attemptsCount}`;

        } else if (userInput == rand) {
            scoreCount = 100 - scoreCount;
            h1.textContent = `You guessed it right Answer is ${rand}`;
            score.textContent = `Score: ${scoreCount} / 100`;
            attempts = 10;
            attempts.textContent = `Remainnig attempts: ${attemptsCount}`;
        }
    } else {
        h1.textContent = "Attempts Exceeded, Press Try Again";
    }

})


