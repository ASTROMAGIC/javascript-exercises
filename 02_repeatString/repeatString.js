const repeatString = function(string, times) {
    let string = "";
    while (times > 0) {
        repeatString += string;
        times--;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
