'use strict';

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//change score function
const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//change Secret Number function
const changeSecretNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

//set secret number width function
const setSecretNumWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

//set body background color function
const setBodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

//when user clicks on check answer button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    changeSecretNumber(secretNumber);
    setBodyBackgroundColor('#60b347');
    setSecretNumWidth('30rem');

    //check for a new high score and push the new value if higher
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost the game!');
      changeScore(0);
    }
  }
});

//reset page when player clicks to play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  changeScore(score);
  changeSecretNumber('?');
  setBodyBackgroundColor('#222');
  setSecretNumWidth('15rem');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
