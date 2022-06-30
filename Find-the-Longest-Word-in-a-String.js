//Solved with for of loop.
function findLongestWordLength(str) {
    const strWordLengthArr = str.split(' ');
    let longestWord = 0;
    for(let word of strWordLengthArr){
      if(word.length > longestWord){
        longestWord = word.length
      }
    }
    return longestWord;
}


//Solved with .forEach.
function findLongestWordLength(str) {
    const strWordLengthArr = str.split(' ');
    let longestWord = 0;
    strWordLengthArr.forEach(function(word){
      if(word.length > longestWord){
        longestWord = word.length;
      }
    })
    return longestWord;
}
//Solved with .forEach refactored
function findLongestWordLength(str) {
    const strWordLengthArr = str.split(' ');
    let longestWord = 0;
    strWordLengthArr.forEach((word)=>word.length > longestWord ? longestWord = word.length : null)
    return longestWord;
}

//Solved with reduce.
function findLongestWordLength(str) {
    const strWordLengthArr = str.split(' ');
    let longestWord = 0;
    strWordLengthArr.reduce(function(prevWord, currentWord){
      if(currentWord.length >= prevWord.length && currentWord.length > longestWord){
      longestWord = currentWord.length;
      console.log(longestWord)
      }
    return currentWord;
    });
    return longestWord;
}

//Solved with reduce refactored.
function findLongestWordLength(str) {
    const strWordLengthArr = str.split(' ');
    let longestWord = 0;
    strWordLengthArr.reduce(function(prevWord, currentWord){ 
    currentWord.length >= prevWord.length && 
    currentWord.length > longestWord ? 
    longestWord = currentWord.length :
    null;
    return currentWord;
});
    return longestWord;
};
