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

let arr = [];
const obj = { id: 1, name: "Alice" };
function Click(id) {
  let cell = new Square();
  let strId = `${id}`;
  let x = parseInt(strId.charAt(0));
  let y = parseInt(strId.charAt(1));
}
// delete arr[0];
// console.log(arr.length);

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
