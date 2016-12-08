class Year {

  constructor(year){
    this.year = year;
  }

  isLeap() {
    let isDivisibleBy4 = this.year % 4 === 0;
    let isNotDivisibleBy100 = this.year % 100 !== 0;
    let isDivisibleBy400 = this.year % 400 === 0;

    return isDivisibleBy4 && isNotDivisibleBy100 || isDivisibleBy400;
    }
  }

module.exports = Year;
