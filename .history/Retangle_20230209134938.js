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

const btnChange = document.querySelector(".btn-change");
let width = document.querySelector("#input-width").value;
let height = document.getElementById("input-height").value;
let myCanvas = document.getElementById("myCanvas");
let rect = new Retangle();
console.log(rect);
btnChange.addEventListener("click", () => {
  console.log(width);
  //   console.log(rect);
});
