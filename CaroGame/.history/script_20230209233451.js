class Square {
  constructor(x, y, status, result) {
    this.x = 0;
    this.y = 0;
    this.status = 0; // chưa nhấn
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
let cell = new Square();
let arr = [];
function Click(id) {
  let strId = `${id}`;
  let x = parseInt(strId.charAt(0));
  let y = parseInt(strId.charAt(1));
  // set giá trị tọa độ ô nhân vào đối tượng square
  cell.setX(x);
  cell.setY(y);
  cell.setStatus(1);
  cell.setValue = "x";
  //   console.log(cell);
  arr.push("0000");
  console.log(arr[0]);
}
console.log(arr[0]);
let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
