let email = "thiago.cng@gmail.com";

const maskEmail = (email) => {
  const endIndex = email.indexOf("@");
  const lenghtToMask = endIndex - 2;
  const maskedEmail =
    email[0] + "*".repeat(lenghtToMask) + email.slice(endIndex - 1);
  return maskedEmail;
};

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
console.log(maskEmail(email));
