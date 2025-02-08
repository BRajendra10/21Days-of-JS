// wap for calculator using switch case

// user input for number and signs/case
let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
let type = prompt("Enter +, -, *, / : ");

// changing the data type into number
num1 = parseInt(num1);
num2 = parseInt(num2);

// using switch case for different case/signs
switch(type) {
    case '+' :
        let sum = num1 + num2;
        console.log(`sum of ${num1} + ${num2} = ${sum}`);
        break;
    case '-' :
        let sub = num1 - num2;
        console.log(`substraction of ${num1} - ${num2} = ${sub}`);
        break;
    case '*' :
        let mul = num1 * num2;
        console.log(`multiplication of ${num1} * ${num2} = ${mul}`);
        break;
    case '/' :
        let div = num1 / num2;
        console.log(`division of ${num1} / ${num2} = ${div}`);
        break;
    default : 
        console.log(`${type} enter valid sign !!`);
}