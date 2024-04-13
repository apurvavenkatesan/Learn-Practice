// Controlflow statements and Conditional Statements- TASK 4
let sum = 0;

// Iterate from 1 to 9 
for (let i = 1; i < 10; i++) {
    // Check if the number is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
        // Add  number to the sum
        sum += i;
    }
}
console.log("The sum of multiples of 3 and 5 under 10 is:", sum);