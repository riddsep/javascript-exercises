const sumAll = function (index, iteration) {
  if (index < 0 || index % 1 !== 0 || typeof iteration !== "number") {
    return "ERROR";
  }
  let sum = 0;
  if (index < iteration) {
    for (let i = index; i <= iteration; i++) {
      sum += i;
    }
  } else if (index > iteration) {
    for (let i = index; i >= iteration; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
