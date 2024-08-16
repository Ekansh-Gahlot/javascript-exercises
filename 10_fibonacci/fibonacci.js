const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    if (num == 0) { return a; }
    if (num == 1) { return b; }
    if(isNaN(num)) { return 1;}
    if(num <= 0) { return "OOPS"}
    else{
        for(let i = 1; i <num; i++){
            c = a+b;
            a = b;
            b = c;
        }
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
