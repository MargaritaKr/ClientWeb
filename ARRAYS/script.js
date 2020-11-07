// часть 1 задачи

var array1 = [1, 3, 7, 8, 12, 15, 20, 36, 0, 4];

function sortDesc(array) {
    return array.sort((a, b) => (b - a));
}

function getFirstFive(array) {
    return array.slice(0, 5);
}

function getLastFive(array) {
    return array.slice(array.length - 5, array.length);
}

function isEven(value) {
    return value % 2 === 0;
}

function getEvenSum(array) {
    return array.filter(isEven).reduce((a, b) => a + b, 0);
}

console.log(sortDesc(array1));

console.log(getFirstFive(array1));

console.log(getLastFive(array1));

console.log(getEvenSum(array1));

// часть 2 задачи

var array2 = [];

for (var i = 1; i <= 100; i++) {
    array2.push(i);
}

function getEvenSquaresList(array) {
    return array.filter(isEven).map(x => Math.pow(x, 2));
}

console.log(array2);

console.log(getEvenSquaresList(array2));