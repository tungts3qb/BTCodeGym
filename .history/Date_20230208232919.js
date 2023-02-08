class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }

  setDay() {
    this.day = day;
  }
  setMonth() {
    this.month = month;
  }
  setYear() {
    this.year = year;
  }
  setDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  toString() {
    retunr`${this.day}/${this.month}/${this.year}`;
  }
}

let date = new Date(2, 2, 2023);
console.log(date.toString());
