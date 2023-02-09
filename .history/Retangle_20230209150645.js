class Retangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  display(context, x, y) {
    context.clearRect(0, 0, 800, 400);
    context.fillStyle = "#fa4b2a";
    console.log(x, y, this.width, this.height);
    context.fillRect(x, y, this.width, this.height);
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
  var ctx = myCanvas.getContext("2d");
  let width = document.getElementById("input-width");
  let height = document.getElementById("input-height");
  let rect = new Retangle(width.value, height.value);
  let x = Math.floor(Math.random() * 800) - rect.getWidth();
  let y = Math.floor(Math.random() * 400) - rect.getHeight();
  console.log(x, y);
  console.log(rect);
  rect.display(ctx, x, y);

  //   ctx.fillRect(x, y, rect.getWidth(), rect.getHeight());
});
