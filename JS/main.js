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
let playerX = document.getElementById('msg1');
let playerO = document.getElementById('msg2');

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
  render();
};

function findWinner() {
  for(i = 0; i < winningCombos.length; i++) {
    
  }
};

function render() {
  boardArr.forEach((square, idx) => {
    squares[idx].innerHTML = actions[square];
  });
  if (winner !== null) {
    playerX.innerHTML = `Player ${action[turn]}'s Turn`;
  }
};

function init() {
  boardArr = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
};


