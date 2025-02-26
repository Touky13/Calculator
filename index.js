const display = document.querySelector(".result");
const numbers = document.querySelectorAll ("div.numbers > button");
const clear = document.querySelector ("#clear");
const operators = document.querySelectorAll ("div.rightBtns > .operators")

numbersArray = Array.from(numbers).reverse();
operatorsArray = Array.from(operators);

console.log (numbers);
console.log (numbersArray);
console.log (operators);
console.log (operatorsArray);


let a = [];
let b = [];
let operator = ``;

function add () {
    return display.textContent = a + b;
}

function subtract () {
    return display.textContent = a - b;
}

function multiply () {
    return display.textContent = a * b;
}

function divide () {
    return display.textContent = a / b;
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

numbersArray.forEach(numbersArray => numbersArray.addEventListener("click", (e) => {
    selectedNumber = (e.target).textContent;
    switch (operator) {
        case ``:
            a.push (selectedNumber);
            display.textContent = a.join("");
            console.log(a, b);
            break;
    
        default:
            b.push (selectedNumber);
            display.textContent = b.join("");
            console.log(a, b);
            break;
    }
}))

clear.addEventListener("click", (e) => {
    a.splice(0);
    b.splice(0);
    operator = ``;
    console.log(a);
    console.log(b);
    console.log(operator);
    return display.textContent = a;
})

operatorsArray.forEach(operatorsArray => operatorsArray.addEventListener("click", (e) => {
    selectedOperator = (e.target).textContent;
    operator = selectedOperator;
    console.log(operator);
}))
