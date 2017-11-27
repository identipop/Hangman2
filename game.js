var WordBuilder = require("./word.js");
var LetterConstructor = require("./letter.js");
var gamewords = require ("./gamewords.js");
var inquirer = require("inquirer");


var currentword; //Store word object
var userguesses = []; //Store letters guessed
var playcount = 0; //Keeps track of "rounds" in guessing word, feeds into inquirer to guess next letter
// var wronganswers = 0;

  ////////////////////////
 // Gameplay Functions //
////////////////////////

/* || Start Game ||
   * Sets (or resets!) global variables to 0 or blank. Used at start of gameplay
      or to start a new game after a win/loss.
   * Initializes game with inquirer and runs the wordInPlay and guessALetter
      functions.
*/
function startGame() {
  playcount = 0;
  wronganswers = 0;
  userguesses = [];

  inquirer
    .prompt([{
      type: "confirm",
      name: "start",
      message: "Ready to play hangman with dog breeds?",

    }]).then(function(data) {
      if (data.start === true) {
        wordInPlay();
        guessALetter(0);


      } else {
        console.log("K, Bye!");
      }

    });
}

/* || Word In Play ||
    * Randomly selects a word from game words array and stores word in local variable
    * Feeds chosen word into Wordbuilder and sets resulting object to global variable
    * Calls object methods that --> create letter objects using letter constructor,
      create blanks in an array, and create a string of blanks to display.
*/

function wordInPlay() {
  var randy = Math.floor(Math.random() * (((gamewords).length -1) - 0 + 1)) + 0;
  var wordinplay = gamewords[randy];
  currentword = new WordBuilder(wordinplay);
  currentword.lettersInWord(wordinplay);
  currentword.makeBlanks();
  currentword.blanksStringMaker();
  console.log(currentword.blanksstring);


}

/* || Guess a Letter ||
    * Prompts user to input a one character letter
    * Stores guess in variable and feeds it into word object method to check
      against letters in word. Displays all guesses, counts incorrect guesses and
      fills blanks with correct guesses.
    * Displays guessed letters and incorrect guesses left (can have 7 incorrect).
    * Calls itself if still in game play or restarts game after win/loss.
*/

function guessALetter(count) {
  if (wronganswers < 7) {
    if (currentword.blanksarray.indexOf("_") === -1) {
      console.log("You Win!");
      startGame();
      return;
    }
    inquirer
      .prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter!",
        validate: function(val) {
          if (val.length > 1) {
            return "Must be only one letter!";
          }
          if (val === "") {
            return "Please enter a letter!";
          }
          if (val === val.toString()) {
            return true;
          }
        },

        filter: function(val) {
          return val.toLowerCase();
        }

      }]).then(function(guess) {
        var playerguess = guess.guess;
        currentword.checkGuess(playerguess);


        if (userguesses.indexOf(playerguess) > -1) {
          console.log("You already guessed that!");
          wronganswers++;
        } else if (currentword.letterarray.indexOf(playerguess) > -1) {
          console.log("Nice!");
        } else if (currentword.letterarray.indexOf(playerguess) === -1) {
          console.log("Nope.");
          wronganswers++;
        }

        userguesses.push(playerguess);
        console.log(currentword.blanksstring);
        console.log("You've guessed: " + userguesses);
        var wrongguessesleft = 7 - wronganswers;
        console.log("Wrong guesses left: " + wrongguessesleft);

        playcount++;
        guessALetter(playcount);


      });
  } else {
    console.log("Game Over!");
    startGame();

  }
}

  /////////////////
 // Start Game! //
/////////////////

startGame();
