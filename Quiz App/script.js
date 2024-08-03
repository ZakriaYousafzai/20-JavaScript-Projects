const quizData = [
    {
        question: "What is Barack Obama Last Name",
        a: "Care",
        b: "Potter",
        c: "Targaryen",
        d: "Sins",
        correct: "Targaryen"
    },
    {
        question: "Why did the apple fall on Newton?",
        a: "Because he was Gay",
        b: "Apple couldn't handle his Aura",
        c: "idk",
        d: "Because it wanted to make history",
        correct: "Because he was Gay"
    }
]

const options = document.querySelectorAll(".options");
const next = document.querySelector(".next");
const question = document.querySelector(".question-box");
const a = document.querySelector(".option1");
const b = document.querySelector(".option2");
const c = document.querySelector(".option3");
const d = document.querySelector(".option4");

let score = 0;
let currentQuiz = 0;
let currentQuizData;

next.addEventListener("click", () => {
    next.textContent = "Next";
    
    if (currentQuiz == quizData.length) {
        lastPage();
    } else {
        currentQuizData = quizData[currentQuiz];
        loadQuiz();
    }

    deselectAnswers();
    currentQuiz++;

})

function lastPage() {
    question.textContent = `Your Score is ${score} out of ${quizData.length}`;
    a.textContent = " ";
    b.textContent = " ";
    c.textContent = " ";
    d.textContent = " ";
}

function loadQuiz() {
    question.textContent = currentQuizData.question;
    a.textContent = currentQuizData.a;
    b.textContent = currentQuizData.b;
    c.textContent = currentQuizData.c;
    d.textContent = currentQuizData.d;
}

function deselectAnswers() {
    options.forEach(option => {
        option.classList.remove("correct");
        option.classList.remove("wrong");
    })
}

options.forEach(option => {
    option.addEventListener("click", () => {
        if (option.textContent == currentQuizData.correct) {
            score++;
            option.classList.add("correct");
            console.log('hi');

        } else {
            option.classList.add("wrong");
            console.log('bye');
        }
    })
})


