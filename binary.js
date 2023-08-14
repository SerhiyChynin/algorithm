const array = [1, 4, 7, 6, 5, 6, 2, 9, 8, 3, 4,10,11,12,13,14];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

function recursionBinary(array, item, start, end) {
       let middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursionBinary(array, item,start, middle-1)
    }
    else {
        return recursionBinary(array, item, middle+1, end)
    }
}

console.log(recursionBinary(array, 4, 0, array.length));
// console.log(binarySearch(array, 3));
console.log(count);

