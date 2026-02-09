const getVowelCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u" ||
      sentence[i] === "A" ||
      sentence[i] === "E" ||
      sentence[i] === "I" ||
      sentence[i] === "O" ||
      sentence[i] === "U"
    ) {
      count++;
    }
  }
  //console.log(`Total number of vowels in the sentence is: ${count}`);
  return count;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
//console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] !== "a" &&
      sentence[i] !== "e" &&
      sentence[i] !== "i" &&
      sentence[i] !== "o" &&
      sentence[i] !== "u" &&
      sentence[i] !== "A" &&
      sentence[i] !== "E" &&
      sentence[i] !== "I" &&
      sentence[i] !== "O" &&
      sentence[i] !== "U" &&
      sentence[i] !== " " &&
      sentence[i] !== "," &&
      sentence[i] !== "!" &&
      sentence[i] !== "."
    ) {
      count++;
    }
  }
  //console.log(`Total number of consonants in the sentence is: ${count}`);
  console.log(count);
  return count;
};

const consonantCount = getConsonantCount("Coding is fun!");
console.log(`Consonant Count: ${consonantCount}`);

const getPunctuationCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "," ||
      sentence[i] === "!" ||
      sentence[i] === "." ||
      sentence[i] === "?" ||
      sentence[i] === ";" ||
      sentence[i] === ":" ||
      sentence[i] === "'"
    ) {
      count++;
    }
  }
  //console.log(`Total number of punctuation marks in the sentence is: ${count}`);
  return count;
};

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const getWordCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== " ") {
      count++;
    } else if (sentence === "" || sentence.trim().length === 0) {
      return 0;
    }
  }
  return count + 1;
};

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);

function getWordCount(sentence) {
  const trimmedSentence = sentence.trim();

  if (trimmedSentence === "") {
    return 0;
  }

  return trimmedSentence.split(/\s+/).length;
}
