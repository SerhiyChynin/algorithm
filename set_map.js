const map = new Map(); // map вместо ключа можно подставлять обьект. В обьекте так нельзя сделать
const objKey = {
    id: 5
}
map.set(objKey, 'mishigin')

console.log(map.get(objKey));

const set = new Set();

set.add(5)
set.add(5)
set.add(2)
set.add(9)
set.add(8)
set.add(5)
set.add(2)
set.add(3)
console.log(set);