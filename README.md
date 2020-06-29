# JS-Password-Generator
homework assignment no. 3
Github link = https://github.com/markmckenna37/JS-Password-Generator
Live page link = https://markmckenna37.github.io/JS-Password-Generator/

For this homework assignment we were tasked with writing the JavaScript code for a password generator.
The password generator would take in 5 different parameter's from the user: a password length between 8 and 128, whether or not upper case, lower case, numbers, and special characters are to be used, and presents a randomly generated password fitting the user's criteria

The JavaScript code established 4 different variables to store the password characters in the form of strings. When the user clicks the "Generate Password" button, an event listener in our JavaScript calls the function "writePassword" Then, using a function called generatePassword, the user is then given a prompt, and a series of 4 confirms to establish their password criteria. The user's choices are then stored as variables. While loops are also used to insure that the user has chosen a correct password length, and at least 1 of the character options to be included.
After the user has chosen their criteria and empty strings are established as password variables, their confirm booleans are then compared to a series of if statements. If true, the password character string is added to the overall password string. If false, that string is not included.
Once all of the user's password criteria are added to the final password string, a for loop is used to pull random character's from the password string, until the user's length has been met.
Finally, randomized string of the user's password criteria is returned for the generate password function. It is assigned to the variable "password" and is then added to the HTML element using a "passwordText."