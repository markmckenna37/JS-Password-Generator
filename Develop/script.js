// Assignment Code
var generateBtn = document.querySelector("#generate");
// var specialChar = "\"! #$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];
// Write password to the #password input
function writePassword() {
  console.log("DOPE");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
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
// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomNum());
// console.log(randomSpecialChar);