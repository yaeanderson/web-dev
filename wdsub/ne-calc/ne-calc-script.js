//TODO: replace const with query parameters
let queryParams = new URLSearchParams(window.location.search);
const P1_STRATS = queryParams.get("p1Strats") / 10;
const P2_STRATS = queryParams.get("p2Strats") / 10;
const PAYOFF_CELL_CONTENTS = "(<input type='number'>,<input type='number'>)"

buildMatrix();

function buildMatrix() {
  let matrix = document.getElementById("matrix");
  
  //Loop (P1_STRATS + 1) number of times. Create row div each time.
  for (let i = 0; i < (P1_STRATS + 1); i++) {
    //Create row div
    let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
    matrix.append(newRow);
    
    //Loop (P2_STRATS + 1) number of times. Create a cell div each time. 
    for (let j = 0; j < (P2_STRATS + 1); j++) {
      //Create cell div
      let newCell = document.createElement("div");
      if (i == 0 && j == 0) {
        newCell.classList.add("empty-cell");
        newCell.innerHTML = "<img alt='' class='random-img' src='https://upload.wikimedia.org/wikipedia/commons/6/67/Exotic_cat_transparent.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'>";
      } else if (i == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "t<sub>" + j + "</sub>";
      } else if (j == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "s<sub>" + i + "</sub>";
      } else {
        newCell.classList.add("payoff-cell");
        newCell.innerHTML = PAYOFF_CELL_CONTENTS;
      }
      newRow.append(newCell);
    }
  }
}
function randomize() {
  let inputArr = document.querySelectorAll(".payoff-cell input");
  const MAX = 100;
  const MIN = -100;
  
  for (const elem of inputArr) {
    elem.value = Math.floor(Math.random() * (MAX - MIN) + MIN);
  }
}
function compute() {
  let p1PayArr = document.querySelectorAll(".payoff-cell input:first-child");
  let p2PayArr = document.querySelectorAll(".payoff-cell input:last-child");
  let payCellArr = document.querySelectorAll(".payoff-cell");
  
  //remove old classes
  for (const elem of payCellArr) {
    if (elem.classList.contains("eliminated")) elem.classList.remove("eliminated");
    if (elem.classList.contains("ne")) elem.classList.remove("ne");
  }
  
  //Loop through each column finding best response out of each row
  for (let j = 0; j < P2_STRATS; j++) {
    let largest = -Infinity;
    
    //identify highest payof in this column
    for (let i = 0; i < P1_STRATS; i++) {
      if (Number(p1PayArr[P2_STRATS * i + j].value) > Number(largest)) largest = Number(p1PayArr[P2_STRATS * i + j].value);
    }
    //eliminate any non-br cells
    for (let i = 0; i < P1_STRATS; i++) {
      if (Number(p1PayArr[P2_STRATS * i + j].value) != Number(largest)) payCellArr[P2_STRATS * i + j].classList.add("eliminated");
    }
  }
  //Loop through each row finding best response out of each column
  for (let i = 0; i < P1_STRATS; i++) {
    let largest = -Infinity;
    
    //identify highest payof in this column
    for (let j = 0; j < P2_STRATS; j++) {
      if (Number(p2PayArr[P2_STRATS * i + j].value) > Number(largest)) largest = Number(p2PayArr[P2_STRATS * i + j].value);
    }
    //eliminate any non-br cells
    for (let j = 0; j < P1_STRATS; j++) {
      if (Number(p2PayArr[P2_STRATS * i + j].value) != Number(largest)) payCellArr[P2_STRATS * i + j].classList.add("eliminated");
    } 
  }  
  //Apply the NE class to any cell w/br for both players
  for (const elem of payCellArr) {
    if (elem.classList.contains("eliminated") == false) elem.classList.add("ne");
  }
}
