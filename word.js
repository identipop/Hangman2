// no
var LetterConstructor = require ("./letter.js");
var game = require ("./game.js");

function WordBuilder (word){

    this.word = word;
    this.lettersInWord = function(word){
      this.letterarray = word.split("");
      this.letterobjects = [];
      for (var i = 0; i<this.letterarray.length; i++){
        this.letterobjects.push(new LetterConstructor(this.letterarray[i]));
      }
    }

}

module.exports = WordBuilder;
