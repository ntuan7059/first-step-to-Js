'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // there are no input
    document.querySelector(`.message`).textContent = `🤦‍♀️ no number`;
  } else {
    // have input
    if (guess == secretNumber) {
      // the input equal to number
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `green`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(
        `.message`
      ).textContent = `congratulation, you win!!!`;
      if (score > highScore)
        document.querySelector(`.highscore`).textContent = score;
    } else if (guess < secretNumber) {
      //the input smaller than number
      if (score > 1) {
        document.querySelector(`.message`).textContent = `too low`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else if (score == 1) {
        document.querySelector(`.message`).textContent = `you loose the game`;
        document.querySelector(`.score`).textContent = 0;
      }
    } else if (guess > secretNumber) {
      /// input bigger tham number
      if (score > 1) {
        document.querySelector(`.message`).textContent = `too high`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else if (score == 1) {
        document.querySelector(`.message`).textContent = `you loose the game`;
        document.querySelector(`.score`).textContent = 0;
      }
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).textContent = `?`;
});
