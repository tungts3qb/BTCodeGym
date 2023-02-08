let person = {
  name: { first: "Bob", last: "Smith" },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};

console.log(person);
person.farewell = function () {
  alert("Bye everybody!");
};

let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;
// let school = "scoo";
person["school"] = "MTA";

var date = new Date(2017, 3, 25, 12, 4, 5);
console.log(date);

console.log(Math.ceil(10.47));
console.log(Math.floor(10.57));
console.log(Math.round(10.57));
