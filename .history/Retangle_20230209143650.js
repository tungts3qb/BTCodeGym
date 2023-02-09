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
let myCanvas = document.getElementById("myCanvas");
btnChange.addEventListener("click", () => {
  let width = document.getElementById("input-width");
  let height = document.getElementById("input-height");
  let rect = new Retangle(width.value, height.value);
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  console.log(x, y);
  var ctx = myCanvas.getContext("2d");
  ctx.fillRect(800 - 11, 400 - 11, rect.getWidth(), rect.getHeight());
  ctx.fillStyle = "#fa4b2a";
});
