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

const squareArr = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];
let xO = true;
const MAX_ROW = 5;
const MAX_WIN = 3;

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
    }
    if (checkLeftDiagonal(squareArr, x, y)) {
      console.log(`${squareArr[x][y].getValue()} chien thang`);
    }
    if (checkRightDiagonal(squareArr, x, y)) {
      console.log(`${squareArr[x][y].getValue()} chien thang`);
    }
    if (checkRow(squareArr, x, y)) {
      console.log(`${squareArr[x][y].getValue()} chien thang`);
      // disableClickOnBoard();
      resetBoard(squareArr);
    }
    if (checkColumn(squareArr, x, y)) {
      console.log(`${squareArr[x][y].getValue()} chien thang`);
    }
  }
}

function disableOnClick() {
  let square = document.querySelectorAll(".square");
  square.setAttribute(onclick, disableOnClick);
}

// check đường chéo trái
function checkLeftDiagonal(squareArr, x, y) {
  let count2 = 0;
  let arrCheckWin = [];
  let [x0, y0] = [x, y];
  while (x0 > 0 && y0 > 0) {
    x0--;
    y0--;
  }

  for (let i = x0, j = y0; i < MAX_ROW, j < MAX_ROW; i++, j++) {
    if (i < MAX_ROW && j < MAX_ROW) {
      if (squareArr[i][j] != null) {
        arrCheckWin.push(squareArr[i][j].getValue());
      } else {
        arrCheckWin.push("");
      }
    }
  }
  let result = checkElementArr(
    arrCheckWin,
    squareArr[x][y].getValue(),
    MAX_WIN
  );
  return result;
}

function checkRightDiagonal(squareArr, x, y) {
  let arrCheckWin = [];
  let [x0, y0] = [x, y];
  while (x0 > 0 && y0 < 4) {
    x0--;
    y0++;
  }

  for (let i = x0, j = y0; i < MAX_ROW, j >= 0; i++, j--) {
    if (i < MAX_ROW && j >= 0) {
      if (squareArr[i][j] != null) {
        arrCheckWin.push(squareArr[i][j].getValue());
      } else {
        arrCheckWin.push("");
      }
    }
  }

  let result = checkElementArr(
    arrCheckWin,
    squareArr[x][y].getValue(),
    MAX_WIN
  );
  return result;
}

function checkColumn(squareArr, x, y) {
  let [x0, y0] = [x, y];
  let arrCheckWin = [];
  while (x0 > 0 && x0 <= 4) {
    x0--;
  }

  for (let i = 0; i < MAX_ROW; i++) {
    if (squareArr[i][y0] != null) {
      arrCheckWin.push(squareArr[i][y0].getValue());
    } else {
      arrCheckWin.push("");
    }
  }

  let result = checkElementArr(
    arrCheckWin,
    squareArr[x][y].getValue(),
    MAX_WIN
  );
  return result;
}

function checkRow(squareArr, x, y) {
  let [x0, y0] = [x, y];
  let arrCheckWin = [];
  while (y0 > 0 && y0 <= 4) {
    y0--;
  }

  for (let i = 0; i < MAX_ROW; i++) {
    if (squareArr[x0][i] != null) {
      arrCheckWin.push(squareArr[x0][i].getValue());
    } else {
      arrCheckWin.push("");
    }
  }

  let result = checkElementArr(
    arrCheckWin,
    squareArr[x][y].getValue(),
    MAX_WIN
  );

  return result;
}

function checkElementArr(arr, value, maxWin) {
  let length = arr.length;
  let countCheck = 0;
  // console.log(`arr = ${arr}`);
  // console.log(`value = ${value}`);
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] === value) {
      if (arr[i + 1] === value) {
        countCheck++;
        if (countCheck == maxWin - 1) return true;
      }
    } else {
      countCheck = 0;
    }
  }
  // console.log(`countCheck = ${countCheck}`);
  return false;
}

function handleButtonReset(squareArr) {
  console.log("here");
  console.log(squareArr);
  for (let i = 0; i < MAX_ROW; i++) {
    for (let j = 0; j < MAX_ROW; j++) {
      if (i < MAX_ROW && j < MAX_ROW) {
        if (squareArr[i][j] != null) {
          squareArr[i][j] == null;
        }
      }
    }
  }
}

function disableClickOnBoard() {
  let nodeList = document.querySelectorAll(".square");
  nodeList.forEach((element) => {
    element.style.pointerEvents = "none";
  });
}

function resetBoard(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i][j] != null) {
        console.log(arr[i][j].getValue());
        // arr[i][j].setValue() = '';
      }
    }
  }
  console.log(arr);
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
