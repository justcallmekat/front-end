var input = 'kittens1!';
var isUppercase = false;
var isLowercase = false;
var isLongEnough = false;
var isSpecialCharacter = false;
var isNumber = false;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//verifies Uppercase
function hasUppercase(input) {
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < letters.length; j++) {
			if (input[i] === letters[j].toUpperCase()) {
				isUppercase = true;
			}
		}
	} //outer loop
} //END hasUppercase
//verifies Lowercase
function hasLowercase(input) {
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < letters.length; j++) {
			if (input[i] === letters[j].toLowerCase()) {
				isLowercase = true;
			}
		}
	} //outer loop
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
//verifies number
function hasNumber(input) {
	var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < numbers.length; j++) {
			if (input[i] === numbers[j]) {
				isNumber = true;
			}
		}
	}//outer loop
};//END hasNumber
//validates input
function isPasswordValid(input) {
	hasUppercase(input);
	hasCharacterLength(input);
	hasLowercase(input);
	hasSpecialCharacter(input);
	hasNumber(input);
	if (isUppercase && isLongEnough && isLowercase && isSpecialCharacter && isNumber) {
		console.log('Your password is valid');
	} else if (!isUppercase) {
		console.log('Valid passwords require: 1 Uppercase letter');
	} else if (!isLongEnough) {
		console.log('Valid passwords require: At least 8 characters long');
	} else if (!isLowercase) {
		console.log('Valid passwords require: 1 Lowercase letter');
	} else if (!isSpecialCharacter) {
		console.log('Valid passwords require: At least 1 special character, i.e.\"!@#$%&*^\"');
	} else if (!isNumber) {
		console.log('Valid passwords require: At least 1 number, i.e.\"0123456789\"');
	}
}; //END password valid
isPasswordValid('Kittens1!');
