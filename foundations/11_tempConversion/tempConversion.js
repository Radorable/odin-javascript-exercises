const convertToCelsius = function(number) {
    const converted = (number - 32) * 5 / 9;
    const result = Math.round(converted * 10) / 10
    return result;
};

const convertToFahrenheit = function(number) {
    const converted = (number * 9 / 5) + 32;
    const result = Math.round(converted * 10) / 10
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
