function formatSymbol(num) {
    switch (num) {
        case 1: return "K";
        case 2: return "M";
        case 3: return "B";
        default: return "";
    }
}
function formatShortMoney(money) {
    let count = 0;
    while (money / 1000 >= 1) {
        money /= 1000;
        count++;
    }
    if (Number.isInteger(money)) {
        console.log(money + formatSymbol(count));
    } else {
        console.log(money.toFixed(2) + formatSymbol(count));
    }
}

formatShortMoney(500);
formatShortMoney(12609);
formatShortMoney(1123400000);
formatShortMoney(1342222);