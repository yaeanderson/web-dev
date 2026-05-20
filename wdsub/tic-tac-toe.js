let winText = document.querySelector("#end-of-game p");
let squareArr = document.querySelectorAll("div.ttt-square");
let EOGDiv = document.getElementById("end-of-game");
let currentPlayer = "X";
let turnTrack = document.getElementById("turn-track"); 
let xScore = 0;
let oScore = 0;
//
for (const elem of squareArr) {
  elem.addEventListener("click", (event) => markSymbol(event));
}
//
function markSymbol(event) {
  let clickedSquare = event.target;
  //check for symbols
  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
    if (checkWinner() == false) checkDraw();
    changePlayer(); 
  }
}
function checkWinner() {
  let isGameOver = false;
  //3 in a row
  for (let _i = 0; _i <3; _i++) {
    if (squareArr[3 * _i].innerText == currentPlayer
      && squareArr[3 * _i + 1].innerText == currentPlayer
      && squareArr[3 * _i + 2].innerText == currentPlayer) isGameOver = true;
  }
  //3 in a column
  for (let _i = 0; _i <3; _i++) {
    if (squareArr[_i].innerText == currentPlayer
      && squareArr[_i + 3].innerText == currentPlayer
      && squareArr[_i + 6].innerText == currentPlayer) isGameOver = true;
  }
  //3 in a diag  
  if (squareArr[0].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[8].innerText == currentPlayer) isGameOver = true;
  else if (squareArr[2].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[6].innerText == currentPlayer) isGameOver = true;
  //if game is over, display end-of-game div
  if (isGameOver) showWinner();
  return isGameOver;
}
function checkDraw() {
  let isDraw = true;
  for (const elem of squareArr) {
    if (elem.innerText == "") isDraw = false;
  }
  if (isDraw) showDraw();
}
function showWinner() {
  EOGDiv.style.display = "block";
  winText.innerText = "Player " + currentPlayer + " Wins!";
  incrementScore();
}
function showDraw() {
  EOGDiv.style.display = "block";
  winText.innerText = "X and O are Matched!";
}
function changePlayer() { 
  currentPlayer = ((currentPlayer == "X") ? "O" : "X");
  turnTrack.innerText = currentPlayer + "'s Turn";
} 
function incrementScore() {
  let boardToInc;
  if (currentPlayer == "X") boardToInc = document.querySelectorAll("#x-score p")[1];
  else boardToInc = document.querySelectorAll("#o-score p")[1];
  boardToInc.innerText = Number(boardToInc.innerText) + 1;
}
function resetGame(event) {
  //Hide EOG Div
  EOGDiv.style.display = "none";
  //Clear Board
  for (const elem of squareArr) {
    elem.innerText = "";
  }
}
