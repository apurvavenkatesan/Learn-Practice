// Function Exercises- TASK 2
function TriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle.");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles triangle.");
    } else {
        console.log("Scalene triangle.");
    }
}
TriangleType(5, 5, 5);   // Output: Equilateral triangle.