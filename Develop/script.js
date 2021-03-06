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

  }
  // Prompt for character length between 8-128, write a loop to make sure the user enters the correct numbers
  function generatePassword() {
    var userLength = prompt("How long would you like your password to be? Type a number between 8 and 128.");
    while (userLength < 8 || userLength > 128) {
      alert("Please type a number between 8 and 128.");
      userLength = prompt("How long would you like your password to be? Type a number between 8 and 128.");
    }

    // confirm whether the user wants upper case letters in their password
    var userUpper = confirm("Would you like to include upper case letters in your password?");
    // confirm whether the user wants lower case letters in their password
    var userLower = confirm("Would you like to include lower case letters in your password?");
    // confirm whether the user wants numbers in their password
    var userNumber = confirm("Would you like to include numbers in your password?");
    // confirm whether the user wants special characters in their password
    var userSpecial = confirm("Would you like to include special characters in your password?");
   
    // Checking to confirm if the user chose at least 1 option for password characters. If not, the questions repeat 
    while ((userUpper === false) && (userLower === false) && (userNumber === false) && (userSpecial === false)) {
      alert("Please choose at least 1 option for password characters.");
       userUpper = confirm("Would you like to include upper case letters in your password?");
       userLower = confirm("Would you like to include lower case letters in your password?");
       userNumber = confirm("Would you like to include numbers in your password?");
       userSpecial = confirm("Would you like to include special characters in your password?");
    }
    // making a variable for password and the variable to be returned, and assigning them empty strings.
    var passwordString = "";
    var userPassword = "";

    // if yes, include uppercase letters
    if (userUpper) {
      passwordString += upperCaseString;
    }
    // if yes, include lowercase letters
    if (userLower) {
      passwordString += lowerCaseString;
    }
    // if yes, include numbers
    if (userNumber) {
      passwordString += numberString;
    }
    // if yes, include special characters
    if (userSpecial) {
      passwordString += specialChar;
    }
    // choose a random set of characters from the string assigned by the user's parameter's
    for (var i = 0; i < userLength; i++) {
      userPassword += passwordString[Math.floor(Math.random() * passwordString.length)];
    }
    // returned string, to be assigned to the generate password function
    return userPassword;
  }


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);