var startButton = document.getElementById('startBtn')
var questionContainerElement = document.getElementById('question-container')
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answerBtn')
var howTo = document.getElementById('instructions')
var gameOver = document.getElementById('game-over')
var highScore = document.getElementById('score')
var initials = document.getElementById('initials')
var timer = document.getElementById('timer')
var time = 60

startButton.addEventListener('click', startGame)

function startTimer(){
    time--
    timer.textContent = time
    if (time <= 0 ){
        endGame()
    }
}


function startGame(){
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
howTo.remove()
setInterval(startTimer, 1000)
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.choices.forEach(choice => {
        var button = document.createElement('button')
        button.innerText = choice
        button.classList.add('btn')
        // if (answer.correct){
        //     button.dataset.correct = answer.correct
        // }
        button.setAttribute('value', choice)
        button.onclick = selectAnswer
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer () {
//  var selectButton = e.target
//  var correct = selectButton.dataset.correct
//  setStatusClass(document.body, correct)
//  Array.from(answerButtonsElement.children).forEach(buttons => {
//      setStatusClass(button. button.dataset.correct)
//  })
 if (this.value !== questions[currentQuestionIndex].answer){
    console.log ("wrong")
} else {
    console.log ("correct")
}
currentQuestionIndex++
if (currentQuestionIndex === questions.length) {
   endGame ()
} else {
     setNextQuestion ()
}
}

function endGame () {
    console.log ("game over")
    gameOver.removeAttribute('class')
    questionContainerElement.setAttribute('class', 'hide')
    // need to stop timer with clear interval then set score
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classlist.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function showHighScore(){

}

var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'strings'],
        answer: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within___:',
        choices: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
        answer: 'alerts'
        
    },
    {
        question: 'Arrays in JavaScript can be used to store___.:',
        choices: ['Numbers and strings', 'Other Arrays', 'Booleans', 'All Of The Above'],
        answer: 'alerts'
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choices: ['strings', 'booleans', 'alerts', 'strings'],
        answer: 'alerts'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'Terminal/Bash', 'For loops', 'console.log'],
        answer: 'alerts'
    }
]
