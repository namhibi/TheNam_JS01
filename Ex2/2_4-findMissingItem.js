
function findMissingElement(arr1, arr2) {

    let myMap = new Map();

    for (let i = 0; i < arr1.length; i++) {
        myMap.set(arr1[i], true);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!myMap.has(arr2[i])) {
            console.log(arr2[i]);
        }
    }
}
let arr1 = ['apple', 'banana', 'orange', 'grapes'];
let arr2 = ['apple', 'banana', 'songoku', 'grapes'];
findMissingElement(arr1, arr2);

