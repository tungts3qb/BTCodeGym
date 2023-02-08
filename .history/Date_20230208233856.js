class Date {
  constructor(day, month, year) {
    if (
      Number.isInteger(day) ||
      Number.isInteger(month) ||
      Number.isInteger(year)
    ) {
      this.day = undefined;
      this.month = undefined;
      this.year = undefined;
    }

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
    return `${this.day}/${this.month}/${this.year}`;
  }
}

// let date = new Date(, 2, 2023);
console.log(date.toString());
