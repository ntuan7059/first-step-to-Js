'use strict';
let currentScore = 0;
const player0 = document.getElementById(`player--0`);
const player1 = document.getElementById(`player--1`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const score0EL = document.getElementById(`score--0`);
const score1EL = document.getElementById(`score--1`);
const diceEL = document.querySelector('.dice');
const current0EL = document.getElementById(`current--0`);
const current1EL = document.getElementById(`current--1`);
let currentPlayer = 0;
let playing = true;
let HoldScore = 0;
const score = [0, 0];
const ShowCurrentNumber = document.getElementById(
  `current--${currentPlayer}`
).textContent;
diceEL.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;
const changePlayer = function () {
  currentScore = 0;
  ShowCurrentNumber = 0;
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  document.querySelector(`.player--0`).classList.toggle(`player--active`);
  document.querySelector(`.player--1`).classList.toggle(`player--active`);
};

btnRoll.addEventListener(`click`, function () {
  // roll dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //check roll !=1
    if (dice !== 1) {
      currentScore += dice;
      ShowCurrentNumber = currentScore;
    } else {
      //check roll =1 change player
      changePlayer();
    }
  }
});
btnHold.addEventListener(`click`, function () {
  if (playing) score[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];
  if (score[currentPlayer] >= 15) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove(`player--active`);
    playing = false;
  } else {
    changePlayer();
  }
});

//reset
btnNew.addEventListener(`click`, function () {
  playing = true;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove(`player--winner`);
  currentScore = 0;
  score[0] = 0;
  score[1] = 0;

  current0EL.textContent = 0;
  current1EL.textContent = 0;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  document.querySelector(`.player--0`).classList.add(`player--active`);
  document.querySelector(`.player--1`).classList.remove(`player--active`);
  currentPlayer = 0;
  diceEL.classList.add(`hidden`);
});
