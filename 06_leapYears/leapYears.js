const leapYears = function(a) {
if (a % 400 === 0) {
    return true;
}   else if (a % 100 === 0) {
    return false; 
}   else if (a % 4 === 0) {
    return true;
}   else {
    return false; 
}

// I should look for ways to write my code more concisely as time goes on. But for now, this works. I should write my function parameters to be specific inputs instead of generic letters. I need to be aware of syntax structure in functions and in general for javascript. This just requires more consistent practice. 

};

// Do not edit below this line
module.exports = leapYears;
