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

let btnChange = document.getElementsByClassName(".btn-change");
let width = document.getElementById("input-width");
let height = document.getElementById("input-height");
let widthValue = width.value;
let heightValue = height.value;
console.log(width);
console.log(height);
