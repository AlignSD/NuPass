// // Assignment Code

// Variables based off user input //
var enter;
var confirmSpecialCharacters;
var confirmUpper;
var confirmLower;

// Password variables
specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold arrays for character case
shift = [];
// variable that will store array for password legnth
var password = [];

var choices;

// var to change var "alphabet" to an uppercase version
var toUpper = function (x) {
  return x.toUpperCase();
}
// creates a variable for uppercase conversion
alphabet2 = alphabet.map(toUpper);



// creates a variable that selects divs that contain #generate ID
var clicker = document.querySelector("#generate");

// when generate password is clicked
clicker.addEventListener("click", function () {
  // sets pass variable to generatePassword function
  pass = generatePassword();
  // takes pass and inserts it into password id
  document.getElementById("password").placeholder = pass;
});

// Password Generation section
function generatePassword() {
  // a parseInt which prompts how many characters the user would like their password to be
  enter = parseInt(prompt("How many characters would you like? Please choose between 8 and 128 character legnth"));
  // if they dont enter a value or the returned value is less that 8 and over 128 it will alert a message
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

    // If user chooses 2 options
    // uppercase and lowercase
    else if (confirmLower && confirmLower) {
      choices = alphabet.concat(alphabet2);
    }
    // lower case and special characters and lowercase
    else if (confirmLower && confirmLower) {
      choices = alphabet.concat(specialCharacters);
    }
    // uppercase and special characters
    else if (confirmLower && confirmLower) {
      choices = specialCharacters.concat(alphabet2);
    }

    // if User chooses 1 option

    // lowercase
    else if (confirmLower) {
      choices = alphabet;
    }
    // special Characters
    else if (confirmSpecialCharacters) {
      choices = specialCharacters;
    }
    // needed to make a shift variable to convert lowercase to uppercase
    else if (confirmUpper) {
      choices = shift.concat(alphabet2);
    };  
    
      // function for RNG //
    for (var i = 0; i < enter; i++) {
      var userChoice = choices[Math.floor(Math.random() * choices.length)];
      password.push(userChoice);
    }
      // Need to convert array to string
      // removes commas between array elements
      var pass = password.join("");
      UserInput(pass);
      return pass;
  


// Create a function based of Users choice

  function UserInput(pass) {
  document.getElementById("password").textContent = pass;
  }
  
    
}



  