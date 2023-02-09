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

const btnChange = document.querySelector(".btn-change");
let width = document.getElementById("input-width");
let height = document.getElementById("input-height");
let widthValue = width.value;
let heightValue = height.value;
console.log(width);
console.log(height);
btnChange.addEventListener("click", () => {
  console.log("here");
});
