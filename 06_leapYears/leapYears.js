const leapYears = function(yearToCheck) {
    const isYearDivisibleByFour = yearToCheck % 4 === 0;
    const isYearDivisibleByFourHundred = yearToCheck % 400 === 0;
    const isCentury = yearToCheck % 100 === 0;

    if(isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred))
    return true;
    else
    return false;
};



// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years 
// (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

// Do not edit below this line
module.exports = leapYears;
