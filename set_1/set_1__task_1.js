function combinate(mainObj, additionalObj) {
    return {
        ...additionalObj,
        ...mainObj
    }
}

const foo = {
    a: 3,
    b: 4
};

const bar = {
    a: 4,
    c: 9
};

const boo = {...foo};
foo.a = 10;


console.log(combinate(foo, bar)); // {a: 3, b: 4, c: 9}