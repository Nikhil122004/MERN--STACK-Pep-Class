function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log("Longest word:", longestWord);
}

findLongestWord("JavaScript is a powerful programming language");
