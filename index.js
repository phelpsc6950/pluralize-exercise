var pluralize = require('pluralize')

var words = ['dog', 'person', 'moose', 'ox', 'wife', 'guest', 'man', 'woman', 'mess', 'photo', 'avocado', 'superhero', 'bar', 'monkey', 'combo', 'toy', 'chair', 'toe'];

function getPluralization(word) {
    // This needs to be replaced with the code that returns a pluralized version of the input word
    word = pluralize(word);
    return word;
}

function printPluralizedWord(word) {
    console.log(`The plural of ${word} is ${getPluralization(word)}`);
}

words.forEach(printPluralizedWord);
