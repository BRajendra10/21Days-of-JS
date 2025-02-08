// find the average

// my array
let marks = [83, 94, 76, 35, 57];
let sum = 0;

// function for finding the average
function findAverage(marks) {
    let arraylength = 0;

    // accesing every eliment of array
    for(let i of marks) {
        sum = sum + i;
        // counting the length of marks array
        arraylength++;
    }
    // returning the average of the array
    return sum / arraylength;
}

let average = findAverage(marks);

console.log(`the average is ${average}`);