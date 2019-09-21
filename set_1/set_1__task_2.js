function apply(func, ...args) {
    // func()
    // args.forEach()
    args.forEach(func);
}

const a = 1, b = 2, c = 3;
const func = a => console.log(a ** 3);

apply(func, a, b, c);