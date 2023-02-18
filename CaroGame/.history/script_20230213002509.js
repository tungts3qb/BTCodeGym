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
    // if (checkLeftDiagonal(squareArr, x, y)) {
    //   console.log(`${squareArr[x][y].getValue()} chien thang`);
    // }
    // if (checkRightDiagonal(squareArr, x, y)) {
    //   console.log(`${squareArr[x][y].getValue()} chien thang`);
    // }
    if (checkColumn(squareArr, x, y)) {
      console.log(`${squareArr[x][y].getValue()} chien thang`);
    }
  }
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
  let [x0Tmp, y0Tmp] = [x0, y0];
  console.log(x0Tmp, y0Tmp);
  for (let i = 0; i < MAX_ROW - 1; i++) {
    if (squareArr[x0Tmp][y0Tmp] != null) {
      count2++;
    }
    if (x0Tmp == MAX_ROW - 1 || y0Tmp == MAX_ROW - 1) {
      break;
    }
    x0Tmp++;
    y0Tmp++;
  }
  console.log(`count 2 = ${count2}`);
  if (count2 >= MAX_WIN) {
    console.log("check tiep");
    console.log("nhung toa do can check la");
    for (let i = 0; i < MAX_ROW - 1; i++) {
      console.log(`[${x0++}][${y0++}]`);
      if (x0 < MAX_ROW && y0 < MAX_ROW) {
        if (squareArr[x0][y0] != null) {
          arrCheckWin.push(squareArr[x0][y0].getValue());
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
}

function checkRightDiagonal(squareArr, x, y) {
  let count = 0;
  let count2 = 0;
  let arrCheckWin = [];
  let [x0, y0] = [x, y];
  while (x0 > 0 && y0 < 4) {
    x0--;
    y0++;
  }
  let [x0Tmp, y0Tmp] = [x0, y0];
  // console.log(x0Tmp, y0Tmp);
  for (let i = 0; i < MAX_ROW; i++) {
    // console.log(x0Tmp, y0Tmp);
    if (x0Tmp == MAX_ROW || y0Tmp < 0) {
      break;
    }
    if (squareArr[x0Tmp][y0Tmp] != null) {
      count2++;
    }
    console.log(`[${x0Tmp}][${y0Tmp}]`);
    x0Tmp++;
    y0Tmp--;
  }
  console.log(`count 2 = ${count2}`);
  if (count2 >= MAX_WIN) {
    console.log("check tiep");
    console.log("nhung toa do can check la");
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
}

function checkColumn(squareArr, x, y) {
  // console.log(squareArr);
  // console.log(x, y);
  let [x0, y0] = [x, y];
  let arrCheckWin = [];
  while (x0 > 0 && x0 <= 4) {
    x0--;
  }
  console.log(`[${x0}][${y0}]`);
  console.log(`[${x}][${y}]`);
  console.log("----");
  // for (let i = 0; i < MAX_ROW; i++) {
  //   console.log(i);
  //   if (squareArr[x0][i] != null) {
  //     console.log(`[${x0}][${i}] = ${squareArr[x0][i].getValue()}`);
  //   }
  // }
}

function checkElementArr(arr, value, maxWin) {
  let length = arr.length;
  let countCheck = 0;
  console.log(`arr = ${arr}`);
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] === value) {
      if (arr[i + 1] === value) {
        countCheck++;
      }
    } else {
      countCheck = 0;
    }
  }
  console.log(`countCheck = ${countCheck}`);
  if (countCheck == maxWin - 1) {
    return true;
  } else {
    return false;
  }
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
