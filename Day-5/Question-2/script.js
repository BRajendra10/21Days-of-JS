// Write a JavaScript function that counts the number of vowels in a string.

let MyString = prompt("Enter String(name): ");
let count = 0;

for(let i of MyString) {
    switch(i) {
        case 'a': count++;
        break;
        case 'e': count++;
        break;
        case 'i': count++;
        break;
        case 'o': count++;
        break;
        case 'u': count++;
        break;
        case 'A': count++;
        break;
        case 'E': count++;
        break;
        case 'I': count++;
        break;
        case 'O': count++;
        break;
        case 'U': count++;
        break;
    }
}

// printing my string
console.log(MyString);
// printing how many vowels in my String
console.log(count);