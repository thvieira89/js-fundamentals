const questions = [
  {
    category: "JavaScript Basics",
    question: "Which keyword declares a block-scoped variable?",
    choices: ["var", "let", "function"],
    answer: "let",
  },
  {
    category: "Arrays",
    question: "Which method adds an item to the end of an array?",
    choices: ["push", "shift", "splice"],
    answer: "push",
  },
  {
    category: "Strings",
    question: "What does the length property return for a string?",
    choices: ["Number of characters", "First character", "Uppercased text"],
    answer: "Number of characters",
  },
  {
    category: "Objects",
    question:
      'How do you access the value of the key named "color" in an object named car?',
    choices: ["car[color]", "car.color", "car->color"],
    answer: "car.color",
  },
  {
    category: "Control Flow",
    question: "Which statement runs code when a condition is true?",
    choices: ["if", "for", "break"],
    answer: "if",
  },
];

const getRandomQuestion = (questionList) => {
  const randomIndex = Math.floor(Math.random() * questionList.length);
  return questionList[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getResults = (question, computerChoice) => {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log(selectedQuestion);
console.log(computerChoice);
console.log(getResults(selectedQuestion, computerChoice));
