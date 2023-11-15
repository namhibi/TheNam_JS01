function countWord(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            count++;
        }
    }
    if (str == "") {
        console.log(0);
    } else {
        console.log(count + 1);
    }
}
countWord("");