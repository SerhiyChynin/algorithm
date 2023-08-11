const array = [1, 4, 7, 6, 5, 6, -5, -23, 2, 9, 8, 3, 4,10,11,12,13,14, -2, -9, 33];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) { 
        let indexMin = i;
        for (let k = i + 1; k < array.length; k++){
            if (array[k] < array[indexMin]) {
                indexMin = k;
            }
            count += 1;
        }
        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}
    

console.log(selectionSort(array));
console.log('count: ' + count);