class Square {
  constructor(x, y, status, result) {
    // this.x = 0;
    // this.y = 0;
    // this.status = 0; // chưa nhấn
    // this.value = ""; // nhận hai giá trị là x và o
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

function addArr(arr, x) {
  arr.push(x);
}

function Toggle(value) {
  return !value;
}

const arr = [];
let tmp = true;
function Click(id) {
  console.log(!tmp);
  let cell = new Square();
  let strId = `${id}`;
  let x = parseInt(strId.charAt(0));
  let y = parseInt(strId.charAt(1));
  arr[(1, 2, 3)];
  if (!isNaN(x) && !isNaN(y)) {
    cell.setX(x);
    cell.setY(y);
    cell.setStatus(1);
    cell.setValue("x");
    arr.push(cell);
  }
  console.log(arr);
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
