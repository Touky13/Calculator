const display = document.querySelector(".result");
const numbers = document.querySelectorAll ("div.numbers > button");
const clear = document.querySelector ("#clear");
const operators = document.querySelectorAll ("div.rightBtns > .operators")
const egal = document.querySelector ("#egal");

numbersArray = Array.from(numbers).reverse();
operatorsArray = Array.from(operators);

let a = [];
let b = [];
let operator = ``;
let result = 0;

function add () {
    return display.textContent = aNumber + bNumber;
}

function subtract () {
    return display.textContent = aNumber - bNumber;
}

function multiply () {
    return display.textContent = aNumber * bNumber;
}

function divide () {
    if (bNumber === 0) {
        return display.textContent = "ERROR";
    } else if (Number.isInteger(aNumber / bNumber)) {
        return display.textContent = aNumber / bNumber;
    } else {
        tempResult = (aNumber / bNumber);
        tempResult = tempResult.toString();
        display.textContent = tempResult.slice(0, 9);
        Number(display.textContent);
        return display.textContent;
    }
}

function operate () {
    if (`${operator}` === `+`) {
        return add();
    } else if (`${operator}` === `-`) {
        return subtract();
    } else if (`${operator}` === `x`) {
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
            break;
    
        default:
            b.push (selectedNumber);
            display.textContent = b.join("");
            break;
    }
}))

clear.addEventListener("click", (e) => {
    a.splice(0);
    b.splice(0);
    operator = ``;
    return display.textContent = 0;
})

operatorsArray.forEach(operatorsArray => operatorsArray.addEventListener("click", (e) => {
    selectedOperator = (e.target).textContent;
    switch (operator) {
        case ``:
            operator = selectedOperator;
            break;   
        default:
            aNumber = Number(a.join(``));
            bNumber = Number(b.join(``));
            result = operate();
            operator = selectedOperator;
            b.splice(0);
            a.splice(0, Infinity, result);
            break;
    }
    operator = selectedOperator;
}))

egal.addEventListener("click", (e) => {
    if (operator !== ``) {
        aNumber = Number(a.join(``));
        bNumber = Number(b.join(``));
        result = operate();
        a.splice(0);
        b.splice(0);
        operator = ``;        
    } else {

    }
})