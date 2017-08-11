// INPUT VARIABLES
var guessInput = document.getElementById('user-input');

// BUTTON VARIABLES
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

// VARIABLES
var randomNumber;
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
var lastNumber = document.getElementById('last-number');
var lastGuess = document.getElementById('your-last-guess');
var feedback = document.getElementById('feedback');

// EVENT LISTENERS
guessButton.addEventListener('click', makeGuess);
guessButton.addEventListener('click', generateRandomNumber);
guessButton.addEventListener('click', resetButtonOn);
guessButton.addEventListener('click', guessFeedback);
guessButton.addEventListener('click', evaluateUserInput);
clearButton.addEventListener('click', clear);
guessInput.addEventListener('keyup', buttonOn);
resetButton.addEventListener('click', restart);
// userMin.addEventListener('keyup', enableUserRange)


function nextNum() {
  var min = parseInt(userMin.value);
  var max = parseInt(userMax.value);
  return Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
}

window.onload = function(e) {
  e.preventDefault();
}

// GENERATE RANDOM NUMBER
function generateRandomNumber() {
  var min = parseInt(userMin.value);
  var max = parseInt(userMax.value);
  if (!randomNumber) {
    randomNumber = nextNum();
    console.log(randomNumber)
  }
}

// GUESS BUTTON
function makeGuess() {
  var guess = parseInt(guessInput.value);
  lastNumber.innerText = guess;
}
// RESET BUTTON
function restart() {
window.location.reload();
}
// CLEAR BUTTON
function clear() {
  guessInput.value = null;
}
// ENABLE BUTTONS
function buttonOn() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
}
function resetButtonOn() {
  resetButton.removeAttribute('disabled');
}

// EVALUATE GUESS
function guessFeedback() {
  var guess = parseInt(guessInput.value);
  lastGuess.innerText = "Your last guess was";
  if (guess > randomNumber) {
      feedback.innerText = 'That is too high';
  } else if (guess < randomNumber) {
      feedback.innerText = 'That is too low';
  } else if (guess === randomNumber) {
      feedback.innerText = 'BOOM!';
  } else {
    lastGuess.innerText = '';
    feedback.innerText = '...please enter a number';
  }
}
// EVALUATE INITIAL INPUT
function evaluateUserInput() {
  var min = parseInt(userMin.value);
  var max = parseInt(userMax.value);
  var guess = parseInt(guessInput.value);
  if (guess < min || guess > max) {
    lastGuess.innerText = 'whoops...';
    feedback.innerText = 'Choose a number between ' + min + ' and ' + max + ' .';
 }
}
