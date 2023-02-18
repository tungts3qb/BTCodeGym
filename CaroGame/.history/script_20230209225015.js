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

function Click(id) {
  let strId = `${id}`;
  console.log(`${id}`.charAt(0));
  console.log(`${id}`.charAt(1));
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
