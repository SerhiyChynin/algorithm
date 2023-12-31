// поиск в ширину в графе. Проверяет есть ли такой путь, и находит кратчайший путь

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    let arr = [];
    arr.push(start)
    while (arr.length > 0) {
        const current = arr.shift()
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            arr = [...arr, ...graph[current]]
        }
    }
    return false;
}

console.log(breadthSearch(graph, 'a', 'k'));