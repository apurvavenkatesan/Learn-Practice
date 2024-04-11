// Function Exercises- TASK 1
function Largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " is the largest.");
    } else if (num2 > num3) {
        console.log(num2 + " is the largest.");
    } else {
        console.log(num3 + " is the largest.");
    }
}

Largest(10, 5, 8); 
// Output: 10 is the largest.