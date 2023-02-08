class Date {
  constructor(day = 0, month = 0, year = 0) {
    if (
      !Number.isInteger(day) ||
      !Number.isInteger(month) ||
      !Number.isInteger(year)
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
    if (
      !Number.isInteger(day) ||
      !Number.isInteger(month) ||
      !Number.isInteger(year)
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
    // this.day = day;
    // this.month = month;
    // this.year = year;
  }
  toString() {
    let [tmpDay, tmpMonth, tmpYear] = [this.day, this.month, this.year];
    if (tmpDay < 10) {
      tmpDay = `0${tmpDay}`;
    }
    if (tmpMonth < 10) {
      tmpMonth = `0${tmpMonth}`;
    }
    if (tmpYear < 10) {
      tmpYear = `0${tmpYear}`;
    }
    return `${tmpDay}/${tmpMonth}/${tmpYear}`;
  }
}

let date = new Date(1, 2, 2023);
console.log(date);
console.log(date.toString());
