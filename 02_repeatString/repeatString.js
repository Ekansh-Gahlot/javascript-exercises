const repeatString = function(str, count) {
    let result = "";
    if(count<0)
    return "ERROR"
    while(count > 0){
        result = result + str;
        count --;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
