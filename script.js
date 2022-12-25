//Linking HTML Classes to JS

const squares = document.querySelectorAll(".board__square");
const boardTitle = document.querySelector(".board__title");
const restartButton = document.querySelector(".restart");

let currentPlayer = "X";

for (const square of squares) {
  square.addEventListener("click", handleClick);
}

restartButton.addEventListener("click", restartGame);

//Makes the game react in accordance to your clicks
function handleClick(event) {
  const square = event.target;
  if (square.textContent) {
    return;
  }

  square.textContent = currentPlayer;
  boardTitle.textContent = `${currentPlayer}'s Turn`;

  if (checkWin()) {
    boardTitle.textContent = `${currentPlayer} Wins!`;
    return;
  }

  if (checkDraw()) {
    boardTitle.textContent = "Draw";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

//Checks for winning combinations

function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Checks if it is three in a row, if true, returns true
  for (const line of lines) {
    const [a, b, c] = line;
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

//Checks for draws

function checkDraw() {
  for (const square of squares) {
    if (!square.textContent) {
      return false;
    }
  }

  return true;
}

//Restarts game
function restartGame() {
  currentPlayer = "X";
  boardTitle.textContent = `${currentPlayer}'s Turn`;

  for (const square of squares) {
    square.textContent = "";
  }
}
