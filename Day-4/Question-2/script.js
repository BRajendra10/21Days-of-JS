// Write a function that takes a string as input and returns a new string where each word is capitalized.

// A function that takes a string and returs a capitalized string
// using .toUpperCase method to convert the string to uupercase
function capitalizedString(Name) {

    let capitalString = Name.toUpperCase();
    
    return console.log(`Hello ${capitalString}`);
}

let name = prompt("Enter your name: ");
// calling function
capitalizedString(name);