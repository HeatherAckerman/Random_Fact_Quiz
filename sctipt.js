// Questions courtesy of: https://thoughtcatalog.com/kelly-peacock/2020/04/multiple-choice-trivia-questions-and-answers/
var qAndA = [
    { q: "How many blue stripes are on the US flag?", a: "6", b: "7", c: "13", d: "0" },//0
    { q: "What is the color of Donald Duck's bowtie?", a: "Red", b: "Yellow", c: "Blue", d: "White" }, //red
    { q: "Which animal does not appear in the chinese zodiac?", a: "Dragon", b: "Rabbit", c: "Dog", d: "Hummingbird" },// Hummingbird
    { q: "Which planet is the hottest?", a: "Venus", b: "Saturn", c: "Mercury", d: "Mars" }, //Venus
    { q: "In which city can  you find the Libety Bell?", a: "Washington DC", b: "Boston", c: "Philadelphia", d: "Manhatten" }, // Philidelphia
    { q: "According to Forrest Gump, “life was like…”?", a: "a bag of lemons", b: "a handful of roses", c: "a Lollipop", d: "a box of chocolates" }, //A box of chocolates
    { q: "What is the rarest blood type?", a: "AB-Negative", b: "B-Negative", c: "A-Positive", d: "O-Positive" },//AB-Negative
    { q: "Which U.S. state is known as the sunflower state?", a: "Florida", b: "Kansas", c: "California", d: "Maine" }, //Kansas
    { q: "Fe is the chemical symbol for…?", a: "Iron", b: "Fluorine", c: "Hydrogen", d: "Zinc" }, //Iron
    { q: "What language is the most spoken worldwide?", a: "Spanish", b: "Chinese", c: "Arabic", d: "English" },//Chinese
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

    a.addEventListener("click", function() {
        secondsLeft--;

    });
    b.addEventListener("click", function() {
        secondsLeft--;

    });
    c.addEventListener("click", function() {
        secondsLeft--;

    });
    d.addEventListener("click", function() {
        score++;
        showScore.textContent = score;
        secondQuestion();
    });
}

function secondQuestion() {
    questionsDisplay.textContent = qAndA[1].q;
    a.textContent = qAndA[1].a;
    b.textContent = qAndA[1].b;
    c.textContent = qAndA[1].c;
    d.textContent = qAndA[1].d;

    a.addEventListener("click", function() {
        score++;
        showScore.textContent = score;
        thirdQuestion();

    });
    b.addEventListener("click", function() {
        secondsLeft--;

    });
    c.addEventListener("click", function() {
        secondsLeft--;

    });
    d.addEventListener("click", function() {
        secondsLeft--;
    });

}

function thirdQuestion() {
    questionsDisplay.textContent = qAndA[2].q;
    a.textContent = qAndA[2].a;
    b.textContent = qAndA[2].b;
    c.textContent = qAndA[2].c;
    d.textContent = qAndA[2].d;


    a.addEventListener("click", function() {
        secondsLeft--;

    });
    b.addEventListener("click", function() {
        secondsLeft--;

    });
    c.addEventListener("click", function() {
        secondsLeft--;

    });

    d.addEventListener("click", function() {
        score++;
        showScore.textContent = score;
        fourthQuestion();
    });
}

function fourthQuestion() {
    questionsDisplay.textContent = qAndA[3].q;
    a.textContent = qAndA[3].a;
    b.textContent = qAndA[3].b;
    c.textContent = qAndA[3].c;
    d.textContent = qAndA[3].d;

    a.addEventListener("click", function() {
        score++;
        showScore.textContent = score;
        fifthQuestion();
    });
    b.addEventListener("click", function() {
        secondsLeft--;

    });
    c.addEventListener("click", function() {
        secondsLeft--;

    });
    d.addEventListener("click", function() {
        secondsLeft--;
    });

}

function fifthQuestion() {
    questionsDisplay.textContent = qAndA[4].q;
    a.textContent = qAndA[4].a;
    b.textContent = qAndA[4].b;
    c.textContent = qAndA[4].c;
    d.textContent = qAndA[4].d;

    a.addEventListener("click", function() {
        secondsLeft--;

    });
    b.addEventListener("click", function() {
        secondsLeft--;

    });
    c.addEventListener("click", function() {
        score++;
        showScore.textContent = score;
        sixthQuestion();
    });
    d.addEventListener("click", function() {
        secondsLeft--;
    });


}

function sixthQuestion() {
    questionsDisplay.textContent = qAndA[5].q;
    a.textContent = qAndA[5].a;
    b.textContent = qAndA[5].b;
    c.textContent = qAndA[5].c;
    d.textContent = qAndA[5].d;

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
        seventhQuestion();
    });
}

function seventhQuestion() {
    questionsDisplay.textContent = qAndA[6].q;
    a.textContent = qAndA[6].a;
    b.textContent = qAndA[6].b;
    c.textContent = qAndA[6].c;
    d.textContent = qAndA[6].d;


    a.addEventListener("click", function () {
        score++;
        showScore.textContent = score;
        eighthQuestion();
    });
    b.addEventListener("click", function () {
        secondsLeft--;

    });
    c.addEventListener("click", function () {
        secondsLeft--;

    });
    d.addEventListener("click", function () {
        secondsLeft--;
    });

}

function eighthQuestion() {
    questionsDisplay.textContent = qAndA[7].q;
    a.textContent = qAndA[7].a;
    b.textContent = qAndA[7].b;
    c.textContent = qAndA[7].c;
    d.textContent = qAndA[7].d;

    a.addEventListener("click", function () {
        secondsLeft--;

    });

    b.addEventListener("click", function () {
        score++;
        showScore.textContent = score;
        ninthQuestion();
    });
    c.addEventListener("click", function () {
        secondsLeft--;

    });
    d.addEventListener("click", function () {
        secondsLeft--;

    });

}

function ninthQuestion() {
    questionsDisplay.textContent = qAndA[8].q;
    a.textContent = qAndA[8].a;
    b.textContent = qAndA[8].b;
    c.textContent = qAndA[8].c;
    d.textContent = qAndA[8].d;

    a.addEventListener("click", function () {
        secondsLeft--;
    });
    b.addEventListener("click", function () {
        score++;
        showScore.textContent = score;
        tenthQuestion();
    });
    c.addEventListener("click", function () {
        secondsLeft--;

    });
    d.addEventListener("click", function () {
        secondsLeft--;

    });
}

function tenthQuestion() {
    questionsDisplay.textContent = qAndA[9].q;
    a.textContent = qAndA[9].a;
    b.textContent = qAndA[9].b;
    c.textContent = qAndA[9].c;
    d.textContent = qAndA[9].d;

    a.addEventListener("click", function () {
        secondsLeft--;

    });
    b.addEventListener("click", function () {
        score++;
        showScore.textContent = score;
        waitForUser();


    });
    c.addEventListener("click", function () {
        secondsLeft--;

    });
    d.addEventListener("click", function () {
        secondsLeft--;

    });
};

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

