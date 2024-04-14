// Controlflow statements and Conditional Statements- TASK 5
// Iterate from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if num is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // Check if  num is a multiple of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Check if  num is a multiple of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // If the num is neither a multiple of 3 nor 5, simply print the num
    else {
        console.log(i);
    }
}
