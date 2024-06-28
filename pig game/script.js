"use strict";
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

const win = document.querySelector('.win');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let result1, result2, condition, completion, currentScore, activePlayer, socres;
const init = function () {
  if (condition === 0) {
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  }
  else {
    activePlayer = 1;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  }
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  socres = [0, 0];
  condition = 0;
  result1 = 0;

  result2 = 0;
  completion = true;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();
const conditionValue = function () {
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  diceEl.classList.add('hidden');
  completion = false;
  condition = activePlayer;
}
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  if (completion) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
  }
}
);
btnHold.addEventListener('click', function () {
  if (completion) {
    if (activePlayer === 0) {
      result1 += currentScore;
      score0El.textContent = result1;
      if (result1 >= 20) {
        conditionValue();
      }
      switchPlayer();
    }
    else {
      result2 += currentScore;
      score1El.textContent = result2;
      if (result2 >= 20) {
        conditionValue();
      }
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init); 
