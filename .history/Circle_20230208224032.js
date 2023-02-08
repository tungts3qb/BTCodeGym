class Circle {
  constrcutor(radius, color) {
    this.radius = radius;
    this.color = color;
  },
  getRadius: function () {
    return this.radius;
  },
  getArea: function () {
    return Math.PI * Math.pow(this.radius);
  },
};

let circle = new Circle(2, "red");
