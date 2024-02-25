// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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
//need varriable for password : length, special char, nummerical char, lower case char, upper case char

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

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
