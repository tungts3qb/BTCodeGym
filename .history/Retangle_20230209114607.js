class Retangle {
  constructor(width, height, area, perimeter) {
    this.width = width;
    this.height = height;
    this.area = area;
    this.perimeter = perimeter;
  }
  display(context) {}
  getArea() {}
  getPerimeter() {}
  setWidth() {}
  setHeight() {}
  getWidth() {}
  getHeight() {}
}

let btnChange = document.querySelector(".btn-change");
let width = document.querySelector("#input-width");
let height = document.querySelector("#input-height");
let widthValue = width.value;
let heightValue = height.value;
btnChange.addEventListener("click", function () {
  console.log(widthValue);
});
