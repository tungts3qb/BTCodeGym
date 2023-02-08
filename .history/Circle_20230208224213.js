class Circle {
  constrcutor(radius, color) {
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

let circle = new Circle(2, "red");
