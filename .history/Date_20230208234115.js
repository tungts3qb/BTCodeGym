class Date {
  constructor(day = 0, month = 0, year = 0) {
    if (
      Number.isInteger(day) ||
      Number.isInteger(month) ||
      Number.isInteger(year)
    ) {
      this.day = undefined;
      this.month = undefined;
      this.year = undefined;
    } else if (day < 1 || day > 31) {
      this.day = undefined;
    } else if (month < 1 || month > 12) {
      this.month = undefined;
    } else if (year < 1) {
      this.year = undefined;
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    }
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
    return `${this.day}/${this.month}/${this.year}`;
  }
}

let date = new Date();
console.log(date.toString());
