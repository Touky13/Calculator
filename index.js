console.log(`Hello World!`);

let a = 100;
let b = 50;
let operator = `+`;

function add () {
    return a + b;
}

function subtract () {
    return a - b;
}

function multiply () {
    return a * b;
}

function divide () {
    return a / b;
}

function operate () {
    if (`${operator}` === `+`) {
        return add();
    } else if (`${operator}` === `-`) {
        return subtract();
    } else if (`${operator}` === `*`) {
        return multiply();
    } else {
        return divide();
    }
}

console.log(operate());