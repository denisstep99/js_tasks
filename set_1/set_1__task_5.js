function compose(...func) {
    return function (a){
        func.reverse().forEach(function(sosi) {
            a=sosi(a);
        });
        return a;
    }
}

const func1 = arg => arg * 2;
const func2 = arg => arg + 10;
const func3 = arg => arg - 2;

const composedFunc = compose(func1, func2, func3);
console.log(composedFunc(2)); // 20 // func3(2) -> 0 func2(0) -> 10 func1(10) -> 20