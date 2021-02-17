var startButton = document.getElementById("start")
//var choiceButton = document.getElementsByClassName("choice")
var choiceButton1 = document.querySelector("#A")
var choiceButton2 = document.querySelector("#B")
var choiceButton3 = document.querySelector("#C")
var choiceButton4 = document.querySelector("#D")
var currentQuestion = document.querySelector("#question")
let myQuestions = 
[
    {
        question: "Commonly used data types DO NOT include:",
        answers:
        {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers",

        },
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within___.",
        answers:
        {
            a: "Quotes",
            b: "Curly Brackets",
            c: "Parenthesis",
            d: "Square brackets",

        },
        correctAnswer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store____.",
        answers:
        {
            a: "Numbers and strings",
            b: "Other arrays",
            c: "Booleans",
            d: "All of the above",
        },
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned variables.",
        answers:
        {
            a: "Commas",
            b: "Curly Brackets",
            c: "Quotes",
            d: "Parenthesis",
        },
        correctAnswer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:
        {
            a: "JavaScript",
            b: "Terminal/Bash",
            c: "For Loops",
            d: "console.log",
        },
        correctAnswer: "console.log"
    }
    
]
choiceButton1.textContent = myQuestions[0].answers.a;
choiceButton2.textContent = myQuestions [0].answers.b;
choiceButton3.textContent = myQuestions [0].answers.c;
choiceButton4.textContent = myQuestions [0].answers.d
currentQuestion.textContent = myQuestions [0].question

function ShowButtons(){
    document.getElementById("choiceButton1").style.display='block';
    document.getElementById("choiceButton2").style.display="block";
    document.getElementById("choiceButton3").style.display='block';
}


