/*----- constants -----*/
const ACTIONS = {
  '1' :  'red',
  '-1' : 'blue',
  null : 'white' 
};

const WINNINGCOMBOS = [
  [0, 1, 2]
  [3, 4, 5]
  [6, 7, 8]
  [0, 3, 6]
  [1, 4, 7]
  [2, 5, 8]
  [0, 4, 8]
  [2, 4, 6]
];
/*----- app's state (variables) -----*/
let boardArr;
let turn;
let winner;

/*----- cached element references -----*/
let squares = document.querySelectorAll('box');

/*----- event listeners -----*/
/*----- functions -----*/
init();

let init = () => {
  boardArr = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

let render = () => {
  squares.forEach(() => {
    i = boardArr[i];
    this.styleMedia.backgroundColor = 
  })
}