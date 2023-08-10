const array = [1, 4, 7, 6, 5, 6, 2, 9, 8, 3, 4];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++){
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 31));
console.log('count:', count);