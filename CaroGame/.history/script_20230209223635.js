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
}

function Click(id) {
  console.log(id);
}

let quare = document.querySelector(".square");
quare.addEventListener("click", Click());
