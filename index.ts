import { question } from "readline-sync";

type Operator = '+' | '-' | '/' | '*';
 
function isNumber(str : string) : boolean
{
    if(isNaN(parseInt(str)))
        return false;
    return true;
}

function isOperator(operator : string) : boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default:
            return false;
    }
}

function calculate(firstNum : number, secondNum : number, operator: Operator) : number
{
    switch(operator) 
    {
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

function main() : void
{
    const firstStr : string = question('Enter first number:\n');
    const operator : string = question('Enter operator:\n');
    const secondtStr : string = question('Enter second number:\n');
    const validInput : boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondtStr);
    if(validInput)
    {
        const result : number = calculate(parseInt(firstStr), parseInt(secondtStr), operator as Operator);
        console.log("Result="+result);
    }
    else {
        console.log("Invalid input");
        main();
    }
}

main();