const removeFromArray = function (array, ...number) {
  return array.filter((item) => !number.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
