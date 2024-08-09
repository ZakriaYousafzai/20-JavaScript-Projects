const restartBtn = document.querySelector(".restart");
const scoreBoard = document.querySelector(".score-board");
const userScore = document.querySelector(".user-score");
const botScore = document.querySelector(".bot-score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const user = document.querySelector(".user");
const computer = document.querySelector(".bot");
let botScoreCounter = 0;
let userScoreCounter = 0;
let botTurn;
let userTurn;
reset();

restartBtn.addEventListener("click", () => {
    reset();
})

rock.addEventListener("click", () => {
    user.innerHTML = `<img class="rock" src="Rock.png" alt="">`;
    userTurn = "Rock";
    result();
    restartBtnEnable();
})

paper.addEventListener("click", () => {
    user.innerHTML = `<img class="rock" src="Paper.png" alt="">`;
    userTurn = "Paper";
    result();
    restartBtnEnable();
})

scissor.addEventListener("click", () => {
    user.innerHTML = `<img class="rock" src="Scissor.png" alt="">`;
    userTurn = "Scissor";
    result();
    restartBtnEnable();
})

function computerTurn() {
    let arr = ["Rock", "Paper", "Scissor"];
    let rand = Math.floor(Math.random() * 3);
    let computerTurn = arr[rand];
    computer.innerHTML = `<img class="rock" src="${computerTurn}.png" alt="">`;
    return computerTurn;
}

function result() {
    botTurn = computerTurn();

    if (userTurn == botTurn) {
        scoreBoard.textContent = "It's a Tie";

    } else if (userTurn == "Rock" && botTurn == "Scissor" ||
        userTurn == "Paper" && botTurn == "Rock" ||
        userTurn == "Scissor" && botTurn == "Paper") {

        userScoreCounter++;
        scoreBoard.textContent = "You won";

    } else {
        botScoreCounter++;
        scoreBoard.textContent = "You Lose";
    }

    scoreCalculation();
}

function scoreCalculation() {
    botScore.textContent = `Score: ${botScoreCounter}`;
    userScore.textContent = `Score: ${userScoreCounter}`;
}

function restartBtnDisable() {
    restartBtn.disabled = true;
}

function restartBtnEnable() {
    restartBtn.disabled = false;
}

function reset() {
    computer.innerHTML = "";
    user.innerHTML = "";
    scoreBoard.innerHTML = "";
    userScoreCounter = 0;
    botScoreCounter = 0;
    scoreCalculation();
    restartBtnDisable();
}