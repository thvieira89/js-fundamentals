const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}

if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}

// ternary operator

const temperature = 30;
const weather = temperature > 25 ? "sunny" : "cool";

console.log(`It's a ${weather} day!`);

// && AND operator , || OR operator

if (2 < 3 && 3 < 4) {
  console.log("The if block runs");
} else {
  console.log("The else block runs");
}

const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? "light";
console.log(theme);
