// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = 60;
var timerId;

// variables to reference DOM elements
var qAndAEl = document.getElementById("qAndA");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("startScreen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide qAndA section
    qAndAEl.removeAttribute("class");

    // start timer
    timerId = setInterval(updateTime, 1000);

    // show starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = qAndA[currentQuestionIndex];

    // update question area with current question
    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.question;

    // clear out any old question choices
    choicesEl.innerHTML = "";

    // loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = choice;

        // attach click event listener to each choice
        choiceNode.onclick = choiceClick;

        // display on the page
        choicesEl.appendChild(choiceNode);
    });
}

function choiceClick() {
    // check if user guessed wrong
    if (this.value !== qAndA[currentQuestionIndex].answer) {
        // penalize time for wrong answer
        time -= 5;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
    } else {
        time += 5;
        feedbackEl.textContent = "Correct!";
    }

    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of qAndA
    if (currentQuestionIndex === qAndA.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide qAndA section
    qAndAEl.setAttribute("class", "hide");
}

function updateTime() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // redirect to next page
        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitButton.onclick = saveHighscore;

// user clicks button to start quiz
startButton.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;


