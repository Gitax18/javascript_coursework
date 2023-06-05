// function to calculate tax
const calculateTax = (rate, value) => value + (value * rate);

// Tax for category 1 (33%)
const tax33 = calculateTax.bind(null, 0.33); // null-> bcz no this keyword, 0.33 -> setting fixed rate of 33%

// tax for category 2 (25%)
const tax25 = calculateTax.bind(null, 0.25);

console.log(tax33(5000));
console.log(tax25(5000));
console.log(calculateTax(0.50, 5000))