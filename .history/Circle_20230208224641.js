class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius);
  }
}

let circle = new Circle(2);
let radius = circle.getRadius();
console.log(radius);
console.log(circle.getArea());
