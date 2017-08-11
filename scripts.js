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
guessInput.addEventListener('keyup', disableUserRange)
userMin.addEventListener('click', enableUserRange)
userMax.addEventListener('click', enableUserRange)

window.onload = function(e) {
  e.preventDefault();
}

// GENERATE RANDOM NUMBER
function nextNum() {
  var min = parseInt(userMin.value);
  var max = parseInt(userMax.value);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumber() {
  if (!randomNumber) {
    randomNumber = nextNum();
    console.log(randomNumber);
  }
}

// GUESS BUTTON
function makeGuess() {
  var guess = parseInt(guessInput.value);
  var lastNumber = document.getElementById('last-number');
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
  guessButton.disabled = false;
  clearButton.disabled = false;
}

function resetButtonOn() {
  resetButton.disabled = false;
}

// DISABLE RANGE
function disableUserRange() {
  userMin.disabled = true;
  userMax.disabled = true;
  resetButton.disabled = false;
}

// ENABLE RANGE
function enableUserRange() {
  userMin.disabled = false;
  userMax.disabled = false;
}

// EVALUATE GUESS
function guessFeedback() {
  var guess = parseInt(guessInput.value);
  var boom = document.getElementById('boom')
  lastGuess.innerText = "Your last guess was";
  if (guess > randomNumber) {
      feedback.innerText = 'That is too high';
  } else if (guess < randomNumber) {
      feedback.innerText = 'That is too low';
  } else if (guess === randomNumber) {
      boom.innerText = 'BOOM!';
      correctGuess()
      adjustMinMax()
 }
}

// CHANGE THE RANGE
function correctGuess() {
  lastGuess.innerText = 'Time to up the rigor!'
  feedback.innerText = 'Your range will decrease by 10 and increase by 10'
}

// ADJUST RANGE
function adjustMinMax() {
  var min = parseInt(userMin.value);
  var max = parseInt(userMax.value);
  userMin.value = min - 10;
  userMax.value = max + 10;
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
