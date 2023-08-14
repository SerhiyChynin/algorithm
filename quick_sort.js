const array = [1, 4, 7, 6, 5, 6, 2, 9, 8, 3, 4, -5,23,-55,-2,13,87,54,22,2, 9, 8, 3, 4, -5,23,-55,-2,13,87,54,222, 9, 8, 3, 4, -5,23,-55,-2,13,87,54,22];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let centerIndex = Math.floor(array.length / 2);
    let center = array[centerIndex];
    let less = [];
    let biggest = [];
    for (let i = 0; i < array.length; i++){
        count += 1;
        if (i === centerIndex)
            continue
        if (array[i] < center) {
            less.push(array[i]);
        } else {
            biggest.push(array[i]); 
        }
    }
    return [...quickSort(less), center, ...quickSort(biggest)]
}

console.log(quickSort(array));
console.log('count:' + count);
