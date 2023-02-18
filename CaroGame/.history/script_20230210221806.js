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
const squareArr = [5][5];
let xO = true;
function Click(id) {
  xO = !xO;
  let cell = new Square();
  let strId = `${id}`;
  let x = parseInt(strId.charAt(0));
  let y = parseInt(strId.charAt(1));

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
    // đưa vào mảng 2 chiều
    squareArr[x][y].push(cell);
  }

  console.log(squareArr);
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());

var arr1 = [
  ["Apple", "Orange", "Pear"],
  ["Carrots", "Beans", "Peas"],
  ["Cookies", "Cake", "Muffins", "Pie"],
];

console.log(arr1[2][1]);
