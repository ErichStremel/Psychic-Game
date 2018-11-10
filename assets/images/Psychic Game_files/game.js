
//Variables to build in

var winCount = document.querySelector('.win-count');
var lossCount = document.querySelector('.loss-count');
var guessesLeft = document.querySelector('.guesses-left');
var previousGuesses = document.querySelector('.previous-guesses');
var winningKey = document.querySelector(".Winning-key");
var gameWon = false;
var wins = 0;
var losses = 0;
var numGuesses = 9;
// Built an empty array to popluate the chosen letters.
var letterChoice = [];

// Computer variables

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("The computer guessed " + computerGuess);

//Key up function that begins running the code

document.addEventListener('keyup', function(){
	
	var userGuess = event.key.toLowerCase();
        console.log("You chose " + userGuess);
	if (computerChoices.indexOf(userGuess) > -1){
            if (userGuess === computerGuess) {
                wins++;
                numGuesses = 10;
                letterChoice = [];
                gameWon = true;
                winningKey.innerText = `The winning letter was ${computerGuess.toUpperCase()}`;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        
            if (numGuesses === 1) {
                numGuesses = 10;
                losses ++;
                letterChoice = [];
                gameWon = false;
                winningKey.innerText = ``;
            }

            if (userGuess !== computerGuess && numGuesses > 0) {
                numGuesses--;
                letterChoice.push(userGuess);
                gameWon = false;
                winningKey.innerText = ``;
            }
	}

	winCount.innerText = `Wins: ${wins}`;
	lossCount.innerText = `Losses: ${losses}`;
	guessesLeft.innerText = `Guesses Left: ${numGuesses}`;
	previousGuesses.innerText = `Your Guesses so far: ${letterChoice}`;

});