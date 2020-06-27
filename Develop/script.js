  
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Establishing variables for our writePassword function, list of special characters:
var specialChar = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// List of uppercase letters
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// List of lowercase letters
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
// List of numbers
var numberString = "0123456789";
// var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Prompt for character length between 8-128, write a loop to make sure the user enters the correct numbers
  function generatePassword() {  
  var userLength = prompt("How long would you like your password to be? Type a number between 8 and 128.");
    while (userLength < 8 || userLength > 128) {
      alert("Please type a number between 8 and 128.");
      userLength = prompt("How long would you like your password to be? Type a number between 8 and 128.");
    }
  }
      // confirm whether the user wants upper case letters in their password
      var userUpper = confirm("Would you like to include upper case letters in your password?");
      // confirm whether the user wants lower case letters in their password
      var userlower = confirm("Would you like to include lower case letters in your password?");
      // confirm whether the user wants numbers in their password
      var userNumber = confirm("Would you like to include numbers in your password?");
      // confirm whether the user wants special characters in their password
      var userSpecial = confirm("Would you like to include special characters in your password?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// function randomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// } 
// function randomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function randomNum() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function randomSpecial() {
//   var computerPlay = choices[Math.floor(Math.random() * choices.length)];
// }
