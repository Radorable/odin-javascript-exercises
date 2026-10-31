const palindromes = function (str) {
  const trimmed = str.replace(/\s/g, "");
  const newStr = trimmed.replace(/[\p{P}]/gu, "");
  const len = newStr.length;
  let start = 0;
  let end = len - 1;
  for (start; start < len; start++) {
    if (newStr[start].toLowerCase() !== newStr[end].toLowerCase()) {
      return false;
    } else {
      end--;
    }
  }
  return true;
};

palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
