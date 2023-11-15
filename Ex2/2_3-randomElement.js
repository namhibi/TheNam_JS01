function getRndInArr(arr) {
    let max = arr.length - 1;
    let min = 0;
    let index = Math.floor(Math.random() * (max - min)) + min;
    console.log(arr[index]);
}
let numbers = new Array("mot", 2, "ba", 4, "nam");
getRndInArr(numbers);