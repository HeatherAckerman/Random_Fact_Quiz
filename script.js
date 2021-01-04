// Questions courtesy of: https://thoughtcatalog.com/kelly-peacock/2020/04/multiple-choice-trivia-questions-and-answers/
var qAndA = [
    {
        q: "How many blue stripes are on the US flag?",
        choices: ["6", "7", "13", "0"],
        a: "0"
    },
    {
        q: "What is the color of Donald Duck's bowtie?",
        choices: ["Red", "Yellow", "Blue", "White"],
        a: "red"
    },
    {
        q: "Which animal does not appear in the chinese zodiac?",
        choices: ["Dragon", "Rabbit", "Dog", "Hummingbird"],
        a: "Hummingbird"
    },
    {
        q: "Which planet is the hottest?",
        choices: ["Venus", "Saturn", "Mercury", "Mars"],
        a: "Venus"
    },
    {
        q: "In which city can  you find the Libety Bell?",
        choices: ["Washington DC", "Boston", "Philadelphia", "Manhatten"],
        a: "Philidelphia0"
    },
    {
        q: "According to Forrest Gump, “life was like…”?",
        choices: ["a bag of lemons", "a handful of roses", "a Lollipop", "a box of chocolates"],
        a: "A box of chocolates"
    },
    {
        q: "What is the rarest blood type?",
        choices: ["AB-Negative", "B-Negative", "A-Positive", "O-Positive"],
        a: "AB-Negative"
    },
    {
        q: "Which U.S. state is known as the sunflower state?",
        choices: ["Florida", "Kansas", "California", "Maine"],
        a: "Kansas"
    },
    {
        q: "Fe is the chemical symbol for…?",
        choices: ["Iron", "Fluorine", "Hydrogen", "Zinc"],
        a: "Iron"
    },
    {
        q: "What language is the most spoken worldwide?",
        choices: ["Spanish", "Chinese", "Arabic", "English"],
        a: "Chinese"
    },
]

var timers = document.getElementById("timers");
var questionsDisplay = document.getElementById("questionsDisplay");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var score = 0;
var showScore = document.getElementById("showScore");
showScore.textContent = "Score: " + score;
var startButton = document.getElementById("startButton");
var lastScore = localStorage.getItem("initials");
var lastInitials = localStorage.getItem("score");
var message = document.getElementById("message")



function prepare() {

    var secondsLeft = 3;
    var timeInterval = setInterval(function () {

        timers.textContent = "Starting in " + secondsLeft;
        secondsLeft--;

        if (secondsLeft === 0 || secondsLeft < 0) {

            clearInterval(timeInterval);
            timer();
            firstQuestion();
        }
    }, 1000);

};


secondsLeft = 60;

function timer() {
    var timerInterval = setInterval(function () {

        timers.textContent = secondsLeft + " Seconds remaining";
        secondsLeft--;

        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            timers.textContent = " ";
            q.textContent = " ";
            a.textContent = " ";
            b.textContent = " ";
            c.textContent = " ";
            d.textContent = " ";
            displayResults();
        }
    }, 1000);

}

function firstQuestion() {
    questionsDisplay.textContent = qAndA[0].q;
    a.textContent = qAndA[0].a;
    b.textContent = qAndA[0].b;
    c.textContent = qAndA[0].c;
    d.textContent = qAndA[0].d;

    a.addEventListener("click", function () {
        secondsLeft--;

    });
    b.addEventListener("click", function () {
        secondsLeft--;

    });
    c.addEventListener("click", function () {
        secondsLeft--;

    });
    d.addEventListener("click", function () {
        score++;
        showScore.textContent = score;
        secondQuestion();
    });
}


function waitForUser() {
    message.textContent = "You scored: " + score + "The last recorded score was: " + lastScore + "Scored by: " + lastInitials + " To save your score enter your initials in the empty box and press save."

    save.addEventListener("click", saveResults);

}

function saveResults() {
    if (initials === "") {
        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        alert("Score Saved!")
    } else {
        alert("Try agian");
    }
}

startButton.addEventListener("click", prepare);

