// Array of special characters to be included in password
const specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowCaseChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const uppCaseChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// quick plan
//need letriable for password : length, special char, nummerical char, lower case char, upper case char

let password = {
  length: 0,
  specialChar: "",
  numericalChar: "",
  lowCaseChar: "",
  uppCaseChar: "",
};

// Function to prompt user for password options 
// need to make sure theres an alert or promt for when user enters incorrect inputs 
function getPasswordOptions() {
  while (!password.length) {
    password.length = parseInt(prompt("Please enter the desired length of your password. It has to be between 8 and 128 characters."));
    if (password.length < 8 || password.length > 128 || isNaN(password.length)) {
      alert("Please enter a valid length. It has to be between 8 and 128 characters. ");
      password.length = 0; 
      // If an incorrect value was inputed an alert will show and resets the length to make the while loop run again
    }
  }
  password.specialChar = confirm("Click OK to include special characters.");
  password.numericalChar = confirm("Click OK to include numerical characters.");
  password.lowCaseChar = confirm("Click OK to include lowercase characters.");
  password.uppCase = confirm("Click OK to include uppercase characters.");

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (password.specialChar) {
    possibleCharacters += getRandom(specialChar);
    guaranteedCharacters += getRandom(specialChar);
  }
  if (password.numericalChar) {
    possibleCharacters += getRandom(numericalChar);
    guaranteedCharacters += getRandom(numericalChar);
  }
  if (password.lowCaseChar) {
    possibleCharacters += getRandom(lowCaseChar);
    guaranteedCharacters += getRandom(lowCaseChar);
  }
  if (password.uppCase) {
    possibleCharacters += getRandom(uppCase);
    guaranteedCharacters += getRandom(uppCase);
  }

  for (let i = 0; i < password.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
