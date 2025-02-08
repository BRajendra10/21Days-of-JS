// WAP to print multiplication table

// user input and data type changing into number.
let num = prompt("Enter a number: ");
num = parseInt(num);

// vairable declaration
let total;

// loop for printing the multiplication table.
for(let i = 1; i <= 10; i++) {
    
    total = num*i;
    console.log(`${num} * ${i} = ${total}`);
}