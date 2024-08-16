const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

const palindromes = function (str) {

    const cleanedString = str.toLowerCase().split("").filter((character => alphanumerical.includes(character))).join('');

    const reversedString = reverseString(cleanedString);

    return reversedString === cleanedString;
   
};


function reverseString(str){
    return str.split("").reverse().join("");
}
// Do not edit below this line
module.exports = palindromes;
