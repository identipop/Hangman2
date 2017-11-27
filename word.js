var LetterConstructor = require("./letter.js");
var game = require("./game.js");
var gamewords = require ("./gamewords.js");
  //////////////////////////////////
 // Constructor for word in play //
//////////////////////////////////
function WordBuilder(word) {

  this.word = word;
  this.letterarray = word.split("");
  this.letterobjects = [];
  this.blanksarray = [];
  this.blanksstring = "";


  // Methods for making and showing blanks
  this.makeBlanks = function() {
    for (var i = 0; i < this.letterarray.length; i++) {
      if (this.letterarray[i] === " ") { //Differentiates spaces and letters
        this.blanksarray.push(" ");

      } else {
        this.blanksarray.push("_");
      }
    }
  };

  this.blanksStringMaker = function() {
    this.blanksstring = "";
    for (var i = 0; i < this.blanksarray.length; i++) {
      this.blanksstring = this.blanksstring + " " + this.blanksarray[i];
    }
  };

  // Method to create letter objects in LetterConstructor
  this.lettersInWord = function(word) {
    for (var i = 0; i < this.letterarray.length; i++) {
      this.letterobjects.push(new LetterConstructor(this.letterarray[i]));
    }
  };

  // Method used during gameplay to check user's guess against letters of word in play
  this.checkGuess = function(guess) {
    if (this.letterarray.indexOf(guess) > -1) {
      for (var i = 0; i < this.letterarray.length; i++) {
        if (this.letterarray[i] === guess) {
          this.blanksarray[i] = guess;
          this.blanksStringMaker();
          guess.shown = true;
        }
      }
    } else if (this.letterarray.indexOf(guess) === -1) {

      wronganswers++;

    }
  };
}

module.exports = WordBuilder;
