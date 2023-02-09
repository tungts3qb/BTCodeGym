class Retangle {
  constructor(width, height, area, perimeter) {
    this.width = width;
    this.height = height;
    this.area = area;
    this.perimeter = perimeter;
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
    this.height = newWidth;
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
let width = document.getElementById("input-width").value;
let height = document.getElementById("input-height").value;
let myCanvas = document.getElementById("myCanvas");
btnChange.addEventListener("click", () => {
  if (notNegativeValue(width) || notNegativeValue(height)) {
    let rect = new Retangle();
    rect.setWidth(width);
    rect.setHeight(height);
    rect.display(myCanvas);
  }
});
