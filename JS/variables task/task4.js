// Variables -TASK 4
let currentAge = 21;
let maxAge = 80;
let amountPerDay = 10; 

let yearsRem = maxAge - currentAge;
let daysRem = yearsRem * 365; 

let totalSnacksNeeded = daysRem * amountPerDay;

console.log("You will need",totalSnacksNeeded,"to last you until the ripe old age of", maxAge);
