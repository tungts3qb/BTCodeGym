class Retangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  display(context) {
    var ctx = context.getContext("2d");
    ctx.fillRect(0, 0, this.width, this.height);
  }
  getArea() {
    return this.width * thi.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
  setWidth(newWidth) {
    this.width = newWidth;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

function notNegativeValue(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

let btnChange = document.querySelector(".btn-change");
let width = document.getElementById("input-width");
let height = document.getElementById("input-height");
let widthValue = width.value;
let heightValue = height.value;
let myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
// ctx.fillRect(10, 40, 140, 160);
// ctx.fillStyle("#fa4b2a");
let rect = new Retangle(width, height);
btnChange.addEventListener("click", () => {
  console.log("widthValue");
});
