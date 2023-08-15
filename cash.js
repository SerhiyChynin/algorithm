function cashFun(fn) {
    const cash = {};
    return function (n) {
        if (cash[n]) {
            console.log('input cash:', cash[n]);
            return cash[n];
        }  
        let res = fn(n)
        console.log('input function', res );
        cash[n] = res;
        return res;
    };
}

function factorial(n) {
    let res = 1;
    while (n != 1) {
        res *= n;
        n -= 1;
    }
    return res
}

const cashFactorial = cashFun(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)
cashFactorial(1)
