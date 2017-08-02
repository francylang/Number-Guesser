
// input variables
var guessInput = document.getElementById('guess-input');

// button variables
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

// variables
var numLow = 1;
var numHigh = 100;
var lastNumber = document.getElementById('last-number');
var lastGuess = document.getElementById('your-last-guess');
var randomNumber = null;
var feedback = document.getElementById('feedback');

// var randomNumber = parseInt(nextNum());
function nextNum() {
  return Math.floor(Math.random() * ((100 - 1) + 1));
}
// generate randomNumber
window.onload = function() {
    randomNumber = nextNum();
}
// guess button
guessButton.addEventListener('click', makeGuess);
function makeGuess() {
  var guess = parseInt(guessInput.value);
  // do I want this to be a local or global variable?
  lastNumber.innerText = guess;
}
// reset button
resetButton.addEventListener('click', restart);
function restart() {
window.location.reload();
}
// clearButton
clearButton.addEventListener('click', clear);
 function clear() {
   guessInput.value = null;
}
// enable buttons
guessInput.addEventListener('keyup', buttonOn);
function buttonOn() {
  document.getElementById('guess-button').removeAttribute('disabled');
  document.getElementById('clear-button').removeAttribute('disabled');
}
guessButton.addEventListener('click', resetButtonOn);
function resetButtonOn() {
  document.getElementById('reset-button').removeAttribute('disabled');
}


guessButton.addEventListener('click', guessFeedback);
function guessFeedback() {
  var guess = parseInt(guessInput.value);
// do I want this to be a local or global variable (doesn't work when it's global)?
  lastGuess.innerText = "Your last guess was";
  if (guess > randomNumber) {
      feedback.innerText = 'That is too high';
  } else if (guess < randomNumber) {
      feedback.innerText = 'That is too low';
  } else if (guess === randomNumber) {
      feedback.innerText = 'BOOM!';
  // } else
  //   lastGuess.innerText = '';
  //   feedback.innerText = '...please enter a number';
  }
}
// user submits inappropriate value
guessButton.addEventListener('click', evaluateUserInput);
function evaluateUserInput() {
  var guess = parseInt(guessInput.value);
  if (guess < numLow || guess > numHigh) {
    lastGuess.innerText = 'whoops...';
    feedback.innerText = 'Choose a number between ' + numLow + ' and ' + numHigh + ' .';
    console.log('hello');
 }
}




// go back and look at input and changing to buttons

// or
// var randomNumber = parseInt(nextNum());
// function nextNum() {
//   return Math.floor(Math.random() * ((numHigh - numLow) + numLow));
// }

// user submits a guess and gets feedback







// user makes guess in proper range of numbers
// user given feedback ("That is too high")
// user guesses again
// user given feedback ("That is too low")
// user guesses again
// user given feedback ("BOOM!")
    // guessButton should be disabled when guessInput is empty
    // clearButton should be disabled when guessInput is empty
    // resetButton should be diabled until after guessButton is clicked
// (e.g. parseInt() returns NaN)????

// ADD TO NOTES
    // event.preventDefault()
    // input = value
    // innertext = regular tags (not form elements)
    // what is querySelector?
    // sign-up for pairing sessions
    // if console.log prints--something is wrong with the actual function
    // if console.log doesn't print--something is wrong with the code block
