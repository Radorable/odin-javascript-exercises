const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else {
        let total = 0;
    if (a < b) {
        for (a; a <= b; a++) {
            console.log(total += a);
        }
    } else {
        for (b; b <= a; b++) {
            console.log(total += b);
        }
    }
        return total;   
    }
       
};

// Do not edit below this line
module.exports = sumAll;
