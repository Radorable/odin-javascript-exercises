const fibonacci = function (int) {
  if (int < 0) {
    return "OOPS";
  }
  let sum = 0;
  let fibo = 0;
  let nacci = 0;
  for (let i = 0; i < parseInt(int); i++) {
    sum = fibo + nacci;
    fibo = nacci;
    nacci = sum;
    if (i === 0) {
      nacci += 1;
      sum += 1;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
