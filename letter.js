


function LetterConstructor (letterinword, word) {
    this.letter = letterinword;
    this.guessed = false;
    this.wordarray = word.split("");
    this.inWord = function (letterinword, word){
        for(var i = 0; i<this.wordarray.length; i++){
            if (this.wordarray[i]===this.letter){
                console.log(this.letter);
            }
            else{
            console.log("_");
            }
            
        }
};
}
var letters = new LetterConstructor("a", "banana");
letters.inWord("a", "banana");