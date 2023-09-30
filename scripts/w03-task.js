/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers); 
/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.getElementById("subtract1").value);
    let subtractNumber2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers); 

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.getElementById("factor1").value);
    let multiplyNumber2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers); 

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
let oddNumbersArr = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").innerHTML = oddNumbersArr;

/* Output Evens Only Array */
let evenNumbersArr = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").innerHTML = evenNumbersArr;

/* Output Sum of Org. Array */
let sumArr = numbersArray.reduce((sum, num) => sum + num);
document.getElementById("sumOfArray").innerHTML = sumArr;
/* Output Multiplied by 2 Array */
let multipliedArr = numbersArray.map(num => num * 2);
document.getElementById("multiplied").innerHTML = multipliedArr;

/* Output Sum of Multiplied by 2 Array */
let sumMultipliedArr = numbersArray
                                .map(num => num * 2)
                                .reduce((sum, num) => sum + num);
document.getElementById("sumOfMultiplied").innerHTML = sumMultipliedArr;