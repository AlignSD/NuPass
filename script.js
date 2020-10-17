
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// When I click generate password we need to PROMPT a series of questions

// Length of password min 8 max 128

// Type of characters lowercase, uppercase, numeric and or special characters

// when either of those are validated it should be validated

// when its validated it generates a password based off of the chosen criteria

// then we need to have it written or ALERTED on the page

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// // Assignment Code

// Variables based off user input //
var enter;
var confirmSpecialCharacters;
var confirmUpper;
var confirmLower;

// Password variables
specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold arrays
shift = [];
password = [];

var choices;
// var to change var "alphabet" to an uppercase version
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphabet2 = alphabet.map(toUpper);


var clicker = document.querySelector("#generate");

clicker.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});

// Password Generation section
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like? Please choose between 8 and 128 character legnth"));

    if (!enter) {
      alert("Please enter a value");
    } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("Please keep it between 8 and 128 characters long"));
    
    } else {
      // This section contains Confirms for what type of 
      // characters user would like in password
      confirmSpecialCharacters = confirm("Would you like Special Characters?");
      confirmUpper = confirm("Would you like Uppercase characters?");
      confirmLower = confirm("Would you like Lowercase characters?");
    };


    // If user chooses no for all options
    if (!confirmLower && !confirmSpecialCharacters &&       !confirmUpper) {
      // Alerts user they choose no options //
      choices = alert ("Please try selecting at least one option!");

    }
    // If user chooses all options
    else if (confirmLower && confirmSpecialCharacters && confirmUpper) {
      choices = specialCharacters.concat(alphabet, alphabet2);
    }

    // function for RNG //
    for (var i = 0; i < enter; i++) {
      var userChoice = choices[Math.floor(Math.random() * choices.length)];
      password.push(userChoice);
    }

  }