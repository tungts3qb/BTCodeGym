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
let ob = { Name: "Jack", Age: 25, Role: "CEO" };
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
}
cell.setX(x);
cell.setY(y);
cell.setStatus(1);
cell.setValue = "x";
arr.push(ob);
console.log(arr);
let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
