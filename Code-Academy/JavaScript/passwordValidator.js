var input = 'kittens1!';
var isUppercase = false;
var isLowercase = false;
var isLongEnough = false;
var isSpecialCharacter = false;
//verifies Uppercase
function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      isUppercase = true;
    }
  }
} //END hasUppercase
//verifies Lowercase
function hasLowercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      isLowercase = true;
    }
  }
} //END hasLowercase
//verifies character length
function hasCharacterLength(input) {
  if (input.length >= 8) {
    isLongEnough = true;
  }
} //END hasCharacterLength
//verifies special character
function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
      if (input[i] == specialCharacters[j]) {
        isSpecialCharacter = true;
      }
    }
  }
} //END hasSpecialCharacter
function isPasswordValid(input) {
  hasUppercase(input);
  hasLowercase(input);
  hasCharacterLength(input);
  hasSpecialCharacter(input);
  if (isUppercase && isLowercase && isLongEnough && isSpecialCharacter) {
    console.log('Your password is valid');
  } else {
    console.log('Valid passwords require: \r 1 Uppercase letter \r 1 lowercase letter \r At least 8 characters long\r At least 1 special character, e.g.\"!@#$%&*^\" ')
  }
}; //END password valid
isPasswordValid('@itt^ens');
