const year = 2026;

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return `${year} is not a leap year.`;
  } else if (year % 100 !== 0) {
    return `${year} is a leap year.`;
  } else if (year % 400 !== 0) {
    return `${year} is not a leap year.`;
  } else {
    return `${year} is a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result);
