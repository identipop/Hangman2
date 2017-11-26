var LetterConstructor = require("./letter.js");
var game = require("./game.js");

function WordBuilder(word) {

  this.word = word;
  this.letterarray = word.split("");
  this.letterobjects = [];
  this.blanksarray =[];
  this.blanksstring= "";
  this.blanksStringMaker = function (){
    this.blanksstring = "";
    for (var i = 0; i<this.blanksarray.length; i++){
      this.blanksstring = this.blanksstring + " " + this.blanksarray[i];
    }
  };
  this.makeBlanks = function (){
    for (var i = 0; i<this.letterarray.length; i++){
      if (this.letterarray[i] === " "){
        this.blanksarray.push(" ");

      }
      else{
      this.blanksarray.push("_");
    }
  }
  };
  this.lettersInWord = function(word) {
    for (var i = 0; i < this.letterarray.length; i++) {
      this.letterobjects.push(new LetterConstructor(this.letterarray[i]));
    }
  };

  this.checkGuess = function(guess) {
    if (this.letterarray.indexOf(guess) > -1) {
      for (var i = 0; i<this.letterarray.length; i++){
        if (this.letterarray[i] === guess){
          this.blanksarray[i] = guess;
          this.blanksStringMaker();
          guess.shown = true;
        }




      }
    }
    else if (this.letterarray.indexOf(guess) === -1){
      
      wronganswers++;

    }
  };



}
module.exports = WordBuilder;
