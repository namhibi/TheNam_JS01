function addRoad(road, index) {
    let newRoad = road.map(arr => arr.slice());
    for (let i = 0; i < newRoad.length; i++) {
        newRoad[i].push(index);
    }
    return newRoad;
}

function findSafeRoad(map) {
    let road = [];
    for (let j = 0; j < map[0].length; j++) {
        if (map[0][j] === 0) {
            let arr = [j];
            road.push(arr);
        }
    }

    for (let i = 1; i < map.length; i++) {
        let count = 0;
        let newRoad = road.map(arr => arr.slice());
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 0) {
                count++;
                if (count > 1) {
                    road = road.concat(addRoad(newRoad, j));
                } else {
                    road = addRoad(road, j);
                }
            }
        }
    }
    return road;
}

let map = [
    [0, 0 ,0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1]
];

console.log(findSafeRoad(map));
