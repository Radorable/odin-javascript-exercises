const getTheTitles = function (obj) {
  let arr = [];
  let len = obj.length;
  for (let i = 0; i < len; i++) {
    arr.push(obj[i].title);
  }
  return arr;
};

// method version
/*
const getTheTitles = function (arr) {
  return arr.map(x => x.title);
};
*/

// Do not edit below this line
module.exports = getTheTitles;
