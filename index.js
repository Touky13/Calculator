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
    display.textContent = aNumber + bNumber;
    if (display.textContent.toString().length >= 10) {
        return display.textContent = (aNumber + bNumber).toExponential(3);
    } else {
        return display.textContent = aNumber + bNumber;
    }
}

function subtract () {
    display.textContent = aNumber - bNumber;
    if (display.textContent.toString().length >= 10) {
        return display.textContent = (aNumber - bNumber).toExponential(3);
    } else {
        return display.textContent = aNumber - bNumber;
    }
}

function multiply () {
    display.textContent = aNumber * bNumber;
    if (display.textContent.toString().length >= 10) {
        return display.textContent = (aNumber * bNumber).toExponential(3);
    } else {
        return display.textContent = aNumber * bNumber;
    }
}

function divide () {
    if (bNumber === 0) {
        return display.textContent = "ERROR";
    } else if (Number.isInteger(aNumber / bNumber)) {
        display.textContent = aNumber / bNumber;
        if (display.textContent.toString().length >= 10) {
            return display.textContent = (aNumber / bNumber).toExponential(3);
        } else {
            return display.textContent = aNumber / bNumber;
        }
    } else {
        result = aNumber / bNumber;
        function roundNumber (value, decimals) { 
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }
        return display.textContent = roundNumber(result, 2);
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