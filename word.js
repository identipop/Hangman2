// no
var letter = require ("./letter.js");

function WordBuilder (word){
    // constructor for blanks and words
    // takes words in array and makes blanks for letters
    // uses letter constructor to show letter/blank
    this.word = word;
    this.wordspaces = word.length;
    this.letterarray= word.split("");
    this.blankarray = [];
    this.blankstring = "";
    this.blanks = function (wordletters){
        for (var i =0; i<(this.letterarray).length; i++){
            this.blankstring.concat("_ ");
            
            
        }
    
    };
    
}
var banana = new WordBuilder("banana");
banana.blanks("banana");
console.log (banana.blankstring);
