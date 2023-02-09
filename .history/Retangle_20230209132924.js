class Retangle {
  constructor(width, height, area, perimeter) {
    this.width = width;
    this.height = height;
    this.area = area;
    this.perimeter = perimeter;
  }
  display(context) {}
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

const btnChange = document.querySelector(".btn-change");
let width = document.getElementById("input-width");
let height = document.getElementById("input-height");
let widthValue = width.value;
let heightValue = height.value;
btnChange.addEventListener("click", () => {
  console.log(width.value);
  console.log(height.value);
  console.log("here");
});
