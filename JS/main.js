/*----- constants -----*/
const actions = {
  '1' :  'red',
  '-1' : 'blue',
  null : 'white' 
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

function clickSquare() {
  console.log('test');
}

function render() {
  boardArr.forEach((square, idx) => {
    squares[idx].style.background = actions[square];
  });
};

function init() {
  boardArr = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
};


