const sumAll = function(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (a < 0 || b <0) return 'ERROR';
    let sum = 0;
    for (let i =Math.min(a,b); i <= Math.max(a,b); i++) {
        sum += i;
    }

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    // this is to ensure that the minimum value and maximum value go into the correct places
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
