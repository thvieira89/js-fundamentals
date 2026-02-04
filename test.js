const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

const developerString = JSON.stringify(developerObj);
console.log(developerString);
