function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("Which among the following is not an operating system?", ["UNIX", "LINUX","OS X", "PITEX"], "PITEX"),
    new Question("The malicious software program, which is detrimental to other computer programs is known as: ", ["Virus", "Worms", "Trojans", "Spyware"], "Virus"),
    new Question("Who among the following has designed the Python programing language?", ["Larry Wall", "Guido van Rossum","Joe Armstrong", "Yukihiro Matsumoto"], "Guido van Rossum"),
    new Question("Who among the following has designed the JavaScript programing language?", ["Rasmus Lerdorf", "Guido van Rossum", "Brendan Eich", "James Gosling"], "Brendan Eich"),
    new Question("Nibble is the series of ……………… bits.", ["2", "4", "6", "8"], "4")
];


var quiz = new Quiz(questions);


populate();





