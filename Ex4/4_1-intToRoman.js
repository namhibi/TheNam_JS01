
function convertToRoman(numChar, one, five, ten) {
    switch (numChar) {
        case 1: return one;
        case 2: return one + one;
        case 3: return one + one + one;
        case 4: return one + five;
        case 5: return five;
        case 6: return five + one;
        case 7: return five + one + one + one;
        case 9: return one + ten;
    }
}
function intToRoman(num) {
    if (num > 1000 || num <= 0) {
        return "num out of range";
    }
    let numStr = String(num);
    let romanMap = [
        ["I", "V", "X"],
        ["X", "L", "C"],
        ["C", "D", "M"]
    ];
    let count = 0;
    let result = "";
    for (let i = numStr.length - 1; i >= 0; i--) {
        result = convertToRoman(Number(numStr[i]), romanMap[count][0], romanMap[count][1], romanMap[count][2]) + result;
        count++;
    }
    return result;
}
console.log(intToRoman(4));
console.log(intToRoman(49));
console.log(intToRoman(469));