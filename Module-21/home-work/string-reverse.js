// chracter reverse

var myString = 'I am a good student';
let length = myString.length;
let reverseStr = ''
for(let i = length - 1; i >= 0; i--){
   reverseStr = reverseStr + myString[i];
}
console.log(reverseStr);


// word reverse 
function wordReverseFunction(sentence){
    let word = sentence.split(' ');
    let wordLength = word.length;
    let reverWord = [];
    for(let i = wordLength - 1; i >= 0; i--){
        reverWord.push(word[i]);
    }
    return reverWord.join(' ');
}
let myWord = wordReverseFunction(myString);
console.log(myWord);
