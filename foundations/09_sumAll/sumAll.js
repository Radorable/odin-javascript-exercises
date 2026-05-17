const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a > b) [a, b] = [b, a];
    let total = 0;
    if (a < b) {
        for (a; a <= b; a++) {
            console.log(total += a);
        }
        return total;
   }    
};

// Do not edit below this line
module.exports = sumAll;
