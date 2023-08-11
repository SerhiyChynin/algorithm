const array = [1, 4, 7, 6, 5, 6, -5, -23, 2, 9, 8, 3, 4,10,11,12,13,14, -2, -9, 33];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++){
            if (array[k + 1] < array[k]) {
                let tmp = array[k];
                array[k] = array[k + 1];
                array[k + 1] = tmp;
            }
            count += 1; 
        }
    }
    return array
}

console.log(bubbleSort(array));
console.log('count=' + count);