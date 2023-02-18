class Square {
  constructor(x, y, status, result) {
    this.x = 0;
    this.y = 0;
    this.status = false; // chưa nhấn
    this.value = ""; // nhận hai giá trị là x và o
  }

  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setStatus(newSatus) {
    this.status = newSatus;
  }

  getStatus() {
    return this.status;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }
}

// check quare is clicked : click -> return true, not click -> return flase
// function isClicked(square) {
//   if (square.getStatus()) {
//     return true;
//   }
//   return false;
// }

const arr = [];
const squareArr = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];
let xO = true;
const MAX_ROW = 5;
function Click(id) {
  xO = !xO;
  let cell = new Square();
  let strId = `${id}`;
  let x = parseInt(strId.charAt(0));
  let y = parseInt(strId.charAt(1));
  let xOrO;
  console.log(xOrO);
  // đưa tọa độ, status, giá trị  mà người chơi click vào một ô bất kỳ
  if (!isNaN(x) && !isNaN(y)) {
    cell.setX(x);
    cell.setY(y);
    cell.setStatus(1);
    if (xO) {
      cell.setValue("x");
    } else {
      cell.setValue("o");
    }
    // đưa vào mảng 2 chiều, đồng thời hiển thị giá trị của nó lên board
    if (squareArr[x][y] == null) {
      squareArr[x][y] = cell;
      let cellXY = document.getElementById(id);
      let div = document.createElement("div");
      if (squareArr[x][y].getValue() == "x") {
        div.classList.add("square-icon-x");
      } else if (squareArr[x][y].getValue() == "o") {
        div.classList.add("square-icon-o");
      }
      cellXY.appendChild(div);

      console.log(cellXY);
    }

    // return xWin, oWin, not
    // checkWin(){

    // }
  }

  console.log(squareArr);
}

function checkWin(squareArr, x, y) {
  // check hang doc
  for (let i = 0; i < MAX_ROW; i++) {
    let count = 0;
    if (squareArr[x][i].getValue() === squareArr[x][i + 1].getValue()) {
      count++;
    }
    if (count == 5) {
      return squareArr[x][y].getValue();
    }
  }
  // check hang ngang
  for (let i = 0; i < MAX_ROW; i++) {}
  // check cheo trai
  for (let i = 0; i < MAX_ROW; i++) {}
  // check cheo phai
  for (let i = 0; i < MAX_ROW; i++) {}
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
