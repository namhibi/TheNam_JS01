function formatMoney(money) {
    let moneyString = String(money);
    let indexOfDot=moneyString.indexOf(".");
    let decimalPart= moneyString.slice(indexOfDot);
    let intPart=moneyString.slice(0,indexOfDot);
    let count = 0;
    let result = "";
    for (let i = intPart.length - 1; i >= 0; i--) {
        result = intPart[i]+result;
        count++;
        if (count == 3 && i != 0) {
            result= ","+result;
            count = 0;
        }
    }
   console.log(result+decimalPart);
}
formatMoney(100.00000009);