// Tahun kabisat adalah tahun yang dapat dibagi 4
// tahun yang dapat dibagi 100 bukanlah tahun kabisat
// kecuali jika tahun tersebut juga dapat dibagi 400

const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this
module.exports = leapYears;
