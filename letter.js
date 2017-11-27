var WordBuilder = require("./word.js");
var gamewords = require ("./gamewords.js");
  ////////////////////////////
 // Creates Letter Objects //
////////////////////////////
var LetterConstructor = function(letter) {

  this.letter = letter;
  this.shown = false;
  // ^ will be used in future to toggle


};

module.exports = LetterConstructor;
