// Function Exercise- TASK 3
function checkInRange(num, start, end) {

    if (num >= start && num <= end) {
        console.log("Between the range");
    } else {
        console.log("Outside the range");
    }

    console.log("num", num);
    console.log("start", start);
    console.log("range", end);
}
checkInRange(15, 11, 30);  