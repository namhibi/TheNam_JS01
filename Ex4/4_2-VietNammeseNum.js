function vietNammeseNum(numChar) {
    switch (numChar) {
        case 0:
            return "không";
        case 1:
            return "một";
        case 2:
            return "hai";
        case 3:
            return "ba";
        case 4:
            return "bốn";
        case 5:
            return "năm";
        case 6:
            return "sáu";
        case 7:
            return "bảy";
        case 8:
            return "tám";
        case 9:
            return "chín";
    }
}
function vietNammeseNumSpecial(numChar) {
    switch (numChar) {
        case 1:
            return "mốt";
        case 4:
            return "tư";
        case 5:
            return "lăm";

    }
}
function changeNumWithIndex(index, nextNum, currentNum) {
    switch (index) {
        case 1:
            if (currentNum == 1 && currentNum == 4) {
                if (nextNum != 1 && nextNum != 0) {
                    return vietNammeseNumSpecial(currentNum);
                } else {
                    return vietNammeseNum(currentNum);
                }
            }
            if (currentNum == 5) {
                if (nextNum != 0) {
                    return vietNammeseNumSpecial(currentNum);
                } else {
                    return vietNammeseNum(currentNum);
                }
            }
            return vietNammeseNum(currentNum);
        case 2:
            if (currentNum == 0) return "linh";
            if (currentNum == 1) return "mười";
            return vietNammeseNum(currentNum) + " mươi";
        case 3:
            return vietNammeseNum(currentNum) + " trăm";
        case 4:
            if (currentNum == 0) return "";
            return vietNammeseNum(currentNum) + " ngàn";
        case 5:
            if (nextNum == -1) {
                return vietNammeseNum(currentNum) + " vạn";
            } else {
                if (currentNum == 1 && currentNum == 4) {
                    if (nextNum != 1 && nextNum != 0) {
                        return vietNammeseNumSpecial(currentNum) + " vạn";
                    } else {
                        return vietNammeseNum(currentNum) + " vạn";
                    }
                }
                if (currentNum == 5) {
                    if (nextNum != 0) {
                        return vietNammeseNumSpecial(currentNum) + " vạn";
                    } else {
                        return vietNammeseNum(currentNum) + " vạn";
                    }
                }
                return vietNammeseNum(currentNum) + " vạn";
            }
        case 6:
            if (currentNum == 1) return "mười";
            return vietNammeseNum(currentNum) + " mươi";

    }
}
function connvertVietNammeseNum(num) {
    let numStr = String(num);
    if (numStr.length == 1) return vietNammeseNum(num);
    let result = "";
    let count = 1;
    if (num < 0) numStr = numStr.slice(1);
    for (let i = numStr.length - 1; i >= 0; i--) {
        if (count == 5 && i != 0) {
            result = changeNumWithIndex(count, Number(numStr[i - 1]), Number(numStr[i])) + " " + result;
        } else {
            result = changeNumWithIndex(count, -1, Number(numStr[i])) + " " + result;
        }

        count++;
    }
    if (num < 0) return "Âm " + result;
    return result;
}
console.log(connvertVietNammeseNum(-750503));