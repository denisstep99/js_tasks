function partApply(func, arg) {
    return function (a){
        return func(arg, a);
    }

}

const govno = (firstArg, secondArg) => firstArg ** 2 + secondArg;
const newFunc = partApply(govno, 3);

console.log(newFunc(2)); // 11
