/*----- constants -----*/
const actions = {
  '1' :  '<p style="color:red;">X</p>',
  '-1' : '<p style="color:blue;">O</p>',
  null : '' 
};

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
/*----- app's state (variables) -----*/
let boardArr;
let turn;
let winner;

/*----- cached element references -----*/
let squares = document.querySelectorAll('.box');
let gameMsg = document.querySelector('#message');

/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', clickSquare);
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/

init();

function clickSquare(evt) {
  const idx = parseInt(evt.target.id.replace('box', ''));
  if (boardArr[idx]) return;
  if (winner !== null) return;
  boardArr[idx] = turn;
  turn *= -1;
  winner = findWinner();
  render();
};

function findWinner() {
  for (i = 0; i < winningCombos.length; i++) {
    if (Math.abs(boardArr[0] + boardArr[1] + boardArr[2]) === 3) return boardArr[0];
    if (Math.abs(boardArr[3] + boardArr[4] + boardArr[5]) === 3) return boardArr[3];
    if (Math.abs(boardArr[6] + boardArr[7] + boardArr[8]) === 3) return boardArr[6];
    if (Math.abs(boardArr[0] + boardArr[3] + boardArr[6]) === 3) return boardArr[0];
    if (Math.abs(boardArr[1] + boardArr[4] + boardArr[7]) === 3) return boardArr[1];
    if (Math.abs(boardArr[2] + boardArr[5] + boardArr[8]) === 3) return boardArr[2];
    if (Math.abs(boardArr[0] + boardArr[4] + boardArr[8]) === 3) return boardArr[0];
    if (Math.abs(boardArr[2] + boardArr[4] + boardArr[6]) === 3) return boardArr[2];
  }
  if (boardArr.includes(null)) return null;
  return 'T';
};

function render() {
  boardArr.forEach((square, idx) => {
    squares[idx].innerHTML = actions[square];
  });
  if (winner === 'T') {
    gameMsg.innerHTML = `No winners this time! Try again!`;
  } else if (winner) {
    gameMsg.innerHTML = `Player ${actions[winner]} wins!`;
  } else {
    gameMsg.innerHTML = `Player ${actions[turn]} Turn`;
  }
};

function init() {
  boardArr = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
};


