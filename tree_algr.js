const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v:11
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(item => {
        sum += item.v
        if (!item.c) {
            return item.v
        }
        sum += recursive(item.c);
    })
    return sum;
}

console.log(recursive(tree));

const iteration = (tree) => {
    if (!tree.length) { //стек - добавляем в конец очереди извлекаем с конца очереди. Очередь(FIFO) - добавляем в конец извлекаем сначала
        return 0;
    }
    let sum = 0;
    let stack = [];
    tree.forEach(item => {
        stack.push(item)
    })
    while (stack.length) {
        const node = stack.pop();
        sum += node.v;
        if (node.c) {
            node.c.forEach(item => {
                stack.push(item)
            })
        }
    }
    return sum;
}

console.log(iteration(tree));