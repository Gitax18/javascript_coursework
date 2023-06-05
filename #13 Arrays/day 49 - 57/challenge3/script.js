// rewrite challenge 2 calcAverageHumanAge function but by using arrow function and chaining method

function calcAverageHumanAge(ages) {
    const humanAgeAverage = ages
    .map(age => age <= 2 ? 2*age : 16 + age * 4 )
    .filter(age => age > 18)
    .reduce((acc, age, i, arr)=> acc + age / arr.length,0)

    return humanAgeAverage
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))