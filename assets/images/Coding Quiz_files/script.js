var timer = 60;
var startButton = document.querySelector("#start-button");
var questionDisplayEl = document.querySelector("#question-display");



var createQuestion1 = function() {
    var question1El = document.createElement("div");
    question1El.className = "questions";
    question1El.textContent = "Who is your favorite Mario character?";
    questionDisplayEl.appendChild(question1El);
    
    var q1a1El = document.createElement("button");
    q1a1El.className = "questions-button";
    q1a1El.textContent = "Princess Peach";
    questionDisplayEl.appendChild(q1a1El);
    
    var q1a2El = document.createElement("button");
    q1a2El.className = "questions-button";
    q1a2El.textContent = "Super Mario";
    questionDisplayEl.appendChild(q1a2El);

    var q1a3El = document.createElement("button");
    q1a3El.className = "questions-button";
    q1a3El.textContent = "Luigi";
    questionDisplayEl.appendChild(q1a3El);

    var q1a4El = document.createElement("button");
    q1a4El.className = "questions-button";
    q1a4El.textContent = "Wario";
    questionDisplayEl.appendChild(q1a4El);

    
};


var createQuestion2 = function() {
    var question2El = document.createElement("div");
    question2El.className = "questions";
    question2El.textContent = "Who is your Ninja Turtle?";
    questionDisplayEl.appendChild(question2El);
    
    var q2a1El = document.createElement("button");
    q2a1El.className = "questions-button";
    q2a1El.textContent = "red";
    questionDisplayEl.appendChild(q2a1El);
    
    var q2a2El = document.createElement("button");
    q2a2El.className = "questions-button";
    q2a2El.textContent = "orange";
    questionDisplayEl.appendChild(q2a2El);

    var q2a3El = document.createElement("button");
    q2a3El.className = "questions-button";
    q2a3El.textContent = "purple";
    questionDisplayEl.appendChild(q2a3El);

    var q2a4El = document.createElement("button");
    q2a4El.className = "questions-button";
    q2a4El.textContent = "blue";
    questionDisplayEl.appendChild(q2a4El);

};



startButton.addEventListener("click", createQuestion1);
