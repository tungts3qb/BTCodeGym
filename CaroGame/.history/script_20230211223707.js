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

      // console.log(cellXY);
    }

    checkLeftDiagonal(squareArr, x, y);
  }

  // console.log(squareArr);
}

// check đường chéo trái
function checkLeftDiagonal(squareArr, x, y) {
  let count = 0;
  let count2 = 0;
  let [x0, y0] = [x, y];
  while (x0 > 0 && y0 > 0) {
    x0--;
    y0--;
  }
  console.log(x0, y0);
  for (let i = 0; i < MAX_ROW; i++) {
    if (squareArr[x0++][y0++] != null) {
      count2++;
    }
  }
  if (count2 == 5) {
    console.log("check tiep");
  }
  // for (let i = 0; i < MAX_ROW; i++) {
  //   if (squareArr[x0][y0].getValue() === squareArr[x][y].getValue()) {
  //     if (squareArr[x0][y0].getValue() === squareArr[x0 + 1][y0 + 1].getValue())
  //       count++;
  //   }
  //   if (y0 <= 4) {
  //     x0++;
  //     y0++;
  //   }
  // }
  // console.log(count);
  // console.log(x0, y0);
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
