const sumAll = function(numX, numY) {
    if (typeof numX !== 'number' || typeof numY !== 'number') {
        return 'ERROR';
    } else if (numX < 0 || numY < 0) {
        return 'ERROR';
    }
    
    let sum = 0;
    let start = numX;
    let end = numY;

    if (numX > numY) {
        start = numY;
        end = numX;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
