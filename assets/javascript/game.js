        // Band names or singers famous in the 80's
        var bandNames = ["rem", "prince", "rush", "metallica", "u2", "queen", "aerosmith"];
        var chosenName = "";
        var nameLength = 0;
        var newArray = [];
        var emptyWord = [];
        var incorrectGuess = [];
        var incorrect = 5;
        var wins = 0;
        var lettersGuessed = [];
        var guesses;

        // function to start the game, select a word and assign it to the array
        function startGame() {
            // Randomly computer selects an array
            chosenName = bandNames[Math.floor(Math.random() * bandNames.length)];
            console.log(chosenName);
            // Calculate the amount of letters in the array
            nameLength = chosenName.length;
            // make chosenname into an array
            newArray = chosenName.split('');
            // sets the expected amount of letters to be guessed
            for (var i = 0; i < nameLength; i++) {
                emptyWord.push('-');
            }
            document.write(emptyWord);
            document.getElementById("chosenWord").innerHTML = " " + emptyWord.join(' ');
        }

        // takes the word, checks if key stroke is in word
        function wordCheck(keyPressed) {
            var letterInWord = false;
            for (var j = 0; j < nameLength; j++) {
                if (newArray[j] === keyPressed) {
                    letterInWord = true;
                    console.log(true);
                }
            }

            if (letterInWord) {
                for (var i = 0; i < nameLength; i++) {
                    if (newArray[i] === keyPressed) {
                        chosenName[i] = keyPressed;
                    }
                    document.write(chosenName[i]);
                }
            }
            
            
            else {
                lettersGuessed.push(keyPressed);
                incorrect--;
                console.log(incorrect);
            }
            
        }
        
        
        
        
        
        startGame()
        
        // function to capture the letter pressed
        document.onkeyup = function (event) {
            var keyPressed = (event.key).toLowerCase();
            console.log(keyPressed);
            
            wordCheck(keyPressed);
            
        document.getElementById("lettersGuessed").innerHTML = " " + lettersGuessed.join('');
        }
        
        
        
        
      
