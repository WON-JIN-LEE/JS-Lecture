function add(a, b) {
    return a + b;
}

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2);


function surprise(operator) {
    const result = operator(3,5);
    console.log(result);
}

surprise(add);