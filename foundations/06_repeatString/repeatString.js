const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let add = "";
    for (let i = 0; i < num; i++) {
        add += string;
    }
    return add;
};

// Do not edit below this line
module.exports = repeatString;
