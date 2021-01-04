// variables to keep track of quiz state
var currentQuestionIndex = 0;

var questionsEl = document.getElementById("questions");
var choicesE1 = document.getElementById("choices");
var startButton = document.getElementById("start");

function go() {
  // hide start screen
  var startScreenE1 = document.getElementById("start-screen");
  startScreenE1.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  showQuestions();
};


secondsLeft = 60;


function showQuestions() {
      // get current question object from array
      var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

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

// user clicks button to start quiz
startButton.onclick = go;

