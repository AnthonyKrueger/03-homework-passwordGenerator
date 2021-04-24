// Make arrays of SpecialCharacters, UpperCase, LowerCase, and Numbers
var upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var numChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ".",
  "?",
  "\\",
  "/"
];

var passGenerated = false;

// Create function to pick random item from array
function getRandomItem(arr) {
  var randNum = Math.floor(Math.random() * arr.length);
  var randItem = arr[randNum];
  return randItem;
}
// Assign function to let user pick choices
function getUserChoices() {
  // Ask length - Assign variable
  var length = prompt("How many characters in your password? Must be between 8 and 128");
  // Need to check for min and max length or non-number values
  if(length > 128 || length < 8){
    alert("Password must be between 8 and 128 characters.")
    return false;
  }
  else {
    // Ask for UpperCase - Assign variable
    var useUpperCase = confirm("Use Upper Case Characters?");
    // Ask for LowerCase - Assign variable
    var useLowerCase = confirm("Use Lower Case Characters?");
    // Ask for Numbers - Assign variable
    var useNumbers = confirm("Use Numbers?");
    // Ask for SpecialChars - Assign variable
    var useSpecialChars = confirm("Use Special Characters?");
    // Need to check that at least one type is used
    if(useUpperCase === false && useLowerCase === false && useNumbers === false && useSpecialChars === false) {
      alert("You must pick at least one character type.")
      return false;
    }
    else {
      // Create object to store choices - return it
      var choices = {
        length:length,
        useUpperCase:useUpperCase,
        useLowerCase:useLowerCase,
        useNumbers:useNumbers,
        useSpecialChars:useSpecialChars
      }
      return choices;
    }
  }
}
function copyPassword() {
  if(passGenerated = true){
    var password = document.querySelector("#password")
    password.select();
    document.execCommand("copy");
  }
}
// Create function to construct the password using user options
function generatePassword() {
  // Create array for final password
  var password = [];
  // Retrieve user choices
  var choices = getUserChoices();
  // Array for possible options
  var possibleOptions = [];
  // Array for definite options
  var definiteOptions = [];
  // If no choices picked, return "retry"
  if(choices === false){
    return "Retry"
  }
  // Push possible characters to the possible options array based on 
  // user choices - push one of each to definiteOptions
  if(choices.useUpperCase) {
    possibleOptions = possibleOptions.concat(upperCaseChars);
    definiteOptions.push(getRandomItem(upperCaseChars));
  }
  if(choices.useLowerCase) {
    possibleOptions = possibleOptions.concat(lowerCaseChars);
    definiteOptions.push(getRandomItem(lowerCaseChars));
  }
  if(choices.useNumbers) {
    possibleOptions = possibleOptions.concat(numChars);
    definiteOptions.push(getRandomItem(numChars));
  }
  if(choices.useSpecialChars) {
    possibleOptions = possibleOptions.concat(specialChars);
    definiteOptions.push(getRandomItem(specialChars));
  }
  // Iterate through possible options to create the password minus definiteOptions
  for(var i = 0; i < (choices.length - definiteOptions.length); i++) {
    password.push(getRandomItem(possibleOptions))
  }
  // Push definite options to password array
  for(var i = 0; i < definiteOptions.length; i++) {
    password.push(definiteOptions[i])
  }
  // Return result as a string
  return password.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  passGenerated = true;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
