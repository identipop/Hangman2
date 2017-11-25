var WordBuilder = require ("./word.js");
var LetterConstructor = require ("./letter.js");
var inquirer = require ("inquirer");

var wordchoices = ["boxer", "cocker spaniel", "english bulldog", "french bulldog", "dachshund", "german shepherd", "maltese", "poodle", "pug", "golden retriever", "corgi"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v", "w", "x", "y", "z", " "];

var letterobjects =[];
function initializeGame(){
  for (var i = 0; i<alphabet.length; i++){
     letterobjects.push(new LetterConstructor(alphabet[i]));
  }
}

function wordInPlay (){
  var randy = Math.floor( Math.random () * ((wordchoices).length - 0 + 1)) + 0;
  var wordInPlay = wordchoices[randy];
  var currentWord = new WordBuilder (wordInPlay);
  currentWord.lettersInWord(wordInPlay);
  console.log(currentWord.letterobjects[0]);

}

wordInPlay();
