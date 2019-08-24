// Band names or singers famous in the 80's
var bandNames = ["rem", "prince", "rush", "metallica", "u2", "queen", "aerosmith"];
var chosenName = "";
var nameLength = 0;
var newArray = [];
var emptyWord = [];
var incorrectGuess = [];

var incorrect = 10;
var wins = 0;
var losses = 0;
var guesses;

// function to start the game, select a word and assign it to the array
function startGame() {
    // Randomly computer selects an array
    chosenName = bandNames[Math.floor(Math.random() * bandNames.length)];
    // make chosenname into an array
    newArray = chosenName.split('');
    // Calculate the amount of letters in the array
    nameLength = newArray.length;
    // sets the expected amount of letters to be guessed
    for (var i = 0; i < nameLength; i++) {
        emptyWord.push('_');
    }
    document.getElementById("chosenWord").innerHTML = " " + emptyWord.join(" ");
}
// reset the game to the start
function reset() {
    incorrect = 10;
    emptyWord = [];
    incorrectGuess = [];
    startGame();
}

// takes the word, checks if key stroke is in word
function wordCheck(letter) {
    var WordLetters = false;
    for (var i = 0; i < nameLength; i++) {
        if (chosenName[i] === letter) {
            WordLetters = true;
        }
    }

    if (WordLetters) {
        for (var i = 0; i < nameLength; i++) {
            if (chosenName[i] === letter) {
                emptyWord[i] = letter;
            }
        }
    }

    else (chosenName[i] !== letter); {
        incorrectGuess.push(letter);
        incorrect--;
    }

    
}
// finish function to add to the win/loss column and restart the game
function finish() {
    if (newArray.toString() == emptyWord.toString()) {
        wins++;
        reset();
        document.getElementById("wins").innerHTML = " " + wins;
    }
    else if (incorrect === 0) {
        losses++;
        reset();
        document.getElementById("losses").innerHTML = " " + losses;
    }

    document.getElementById("chosenWord").innerHTML = "  " + emptyWord.join(" ");
    document.getElementById("guessesLeft").innerHTML = " " + incorrect;
}


//start the game
startGame()

// function to capture the letter pressed
document.onkeyup = function (event) {
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();

    wordCheck(keyPressed);
    finish();
    // publish incorrect keys selected
    document.getElementById("lettersGuessed").innerHTML = " " + incorrectGuess.join('');
}





