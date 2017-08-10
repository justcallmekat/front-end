var input = 'Turpentine and turtles';
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = []; //set up to hold the results and print to the console

for (var i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }

  for (var j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}; //END for loop

console.log(resultArray.join('').toUpperCase());
