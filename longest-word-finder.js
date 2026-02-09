function findLongestWordLength(sentence) {
  let count = 0;
  let longestWord = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (count > longestWord) {
        longestWord = count;
      }
      count = 0;
    } else {
      count++;
    }
  }
  if (count > longestWord) {
    longestWord = count;
  }
  return longestWord;
}
