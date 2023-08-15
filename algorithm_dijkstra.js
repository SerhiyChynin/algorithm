// поиск кратчайшего пути в графе

const graph = {};
graph.a = { b: 2, c:1};
graph.b = { f: 7};
graph.c = { d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 10000000
        }
    })
    // console.log(costs);
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(node => {
            let newCosts = cost + neighbors[node]
            if (newCosts < costs[node]) {
                costs[node] = newCosts;
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = 10000000;
    let lowestNode;
    Object.keys(costs).forEach(item => {
        let cost = costs[item]
        if (cost < lowestCost && !processed.includes(item)) {
            lowestCost = cost;
            lowestNode = item;
        }
    })
    return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));

