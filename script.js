
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





var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", generatePassword);
var passLength = prompt("How many characters will your password be? Enter a number between 8 and 128", '');
 if (passLength >= 8 && passLength <= 128) {
    
     var lowerCase = confirm("Lowercase?");
     if (lowerCase == true) {
       alert("Lower Case Selected");
     
    //  }else var upperCase = confirm("Upper Case?"); {
    //    if(upperCase == true) {
    //      alert("Upper Case Selected");
    //    }
     } var upperCase = confirm("Upper Case?"); {
       if (upperCase == true) {
         alert("Upper Case Selected");
       }
     } var specialCharacters = confirm("special characters?"); {
       if (specialCharacters == true) {
         alert("Special Characters Selected");
       }
     }

 } 
 else {
     alert("error");
 }  
//  else if 



function generatePassword() {
  var length = passLength,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+",
      lowerCase = "abcdefghijklmnopqrstuvwxyz1234567890",
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ",
      specialCharacters = "1234567890!@#$%^&*()_+",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n ));
  }
  return(document.getElementById("password").innerHTML = retVal)

}










// var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
// var numeric = '0123456789';
// var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';