const sumAll = function(startNumber, endNumber) {
    if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) return "ERROR";
    if (startNumber < 0 || endNumber < 0) return "ERROR";
    if(startNumber>endNumber)
    {
        let copy = endNumber
        endNumber = startNumber;
        startNumber = copy;
    }
    let sum = 0;
    for(let i = startNumber; i <= endNumber; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
