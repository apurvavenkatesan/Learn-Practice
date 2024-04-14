// display the shirt color for each day in week using switch case
function ShirtColor(day) {
    var color;

    switch (day) {
        case 1:
            color = "Violet";
            break;
        case 2:
            color = "Blue";
            break;
        case 3:
            color = "Green";
            break;
        case 4:
            color = "Yellow";
            break;
        case 5:
            color = "Orange";
            break;
        case 6:
            color = "Red";
            break;
        case 7:
            color = "Pink";
            break;
        default:
            color = "Unknown";
            break;
    }

    return color;
}
for (let i = 1; i <=7; i++) {
    console.log("Day" ,i,":",ShirtColor(i));
}