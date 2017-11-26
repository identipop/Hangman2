var WordBuilder = require("./word.js");
var LetterConstructor = require("./letter.js");
var inquirer = require("inquirer");

var wordchoices = ["boxer", "cocker spaniel", "english bulldog", "french bulldog", "dachshund", "german shepherd", "maltese", "poodle", "pug", "golden retriever", "corgi"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];



var currentword;
var userguesses = [];
var playcount = 0;
var wronganswers = 0;
// function initializeGame(){
//   for (var i = 0; i<alphabet.length; i++){
//      letterobjects.push(new LetterConstructor(alphabet[i]));
//   }
// }

function startGame(){
  playcount = 0;
  wronganswers = 0;
  userguesses =[];

inquirer
.prompt([
  {
    type: "confirm",
    name: "start",
    message: "Ready to play hangman?",

  }
]).then(function (data){
  if (data.start === true){
  wordInPlay();
  guessALetter(0);


}
else {
  console.log ("K, Bye!");
}

});
}

function wordInPlay() {
  var randy = Math.floor(Math.random() * ((wordchoices).length - 0 + 1)) + 0;
  var wordinplay = wordchoices[randy];
  currentword = new WordBuilder(wordinplay);
  currentword.lettersInWord(wordinplay);
  currentword.makeBlanks();
  currentword.blanksStringMaker();
  console.log (currentword.blanksstring);


}

function guessALetter(count){
  if (wronganswers < 7){
    if (currentword.blanksarray.indexOf("_")===-1){
      console.log ("You Win!");
      startGame();
      return;
    }
  inquirer
  .prompt([
    {
      type: "input",
      name: "guess",
      message: "Guess a letter!",
      validate: function(val){
        if (val.length > 1){
          return "Must be only one letter!";
        }
        if (val === ""){
          return "Please enter a letter!";
        }
        if (val === val.toString()){
          return true;
        }
      },

      filter: function (val) {
          return val.toLowerCase();
        }

    }
  ]).then(function(guess){
    var playerguess = guess.guess;
    currentword.checkGuess(playerguess);


    if (userguesses.indexOf(playerguess)>-1){
      console.log("You already guessed that!");
      wronganswers++;
    }
    else if (currentword.letterarray.indexOf(playerguess)>-1){
      console.log ("Nice!");
    }
    else if (currentword.letterarray.indexOf(playerguess)===-1){
      console.log ("Nope.");
      wronganswers++;
    }

    userguesses.push(playerguess);
    console.log (currentword.blanksstring);
    console.log ("You've guessed: " + userguesses);
    var wrongguessesleft = 7-wronganswers;
    console.log ("Wrong guesses left: " + wrongguessesleft);

    playcount++;
    guessALetter(playcount);


  });
}
else{
  console.log ("Game Over!");
  startGame();

}
}



startGame();
