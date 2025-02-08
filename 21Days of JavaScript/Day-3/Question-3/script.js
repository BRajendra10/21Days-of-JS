// WAP to find factorial of given number(User Input)

// user input and changing the data type into number.
let num = prompt("Enter a number: ");
num = parseInt(num);

// variable declaration
let factorial = 1;

// loop for finding the factorial
for(let i = num; i >= 1; i--) {
    factorial = factorial * i;
}

// Factorial
console.log( factorial );