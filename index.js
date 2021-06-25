"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function isNumber(str) {
    if (isNaN(parseInt(str)))
        return false;
    return true;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function main() {
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var operator = readline_sync_1.question('Enter operator:\n');
    var secondtStr = readline_sync_1.question('Enter second number:\n');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondtStr);
    if (validInput) {
        var result = calculate(parseInt(firstStr), parseInt(secondtStr), operator);
        console.log("Result=" + result);
    }
    else {
        console.log("Invalid input");
        main();
    }
}
main();
