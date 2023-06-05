// /*
// working with numbers, dates and timers 
// date - 2 june 2023
// new section
// */

// // ********** NUMBERS **********

// const parInt = Number.parseInt
// // 
// console.log(Number.parseInt('23px'))
// console.log(Number.parseInt('30e+23'))
// console.log(parInt('e34'))
// console.log(typeof Infinity)

// console.log(Number.isNaN(23))
// console.log(Number.isNaN('34'))
// console.log(Number.isNaN('wtf'))
// console.log(Number.isNaN(23 / 0)) // invalid - result in infinity
// console.log('')

// console.log(Number.isFinite(12.3))
// console.log(Number.isFinite(123))
// console.log(Number.isFinite('123'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(23/0))
// console.log('')


// console.log(Number.isInteger(23))
// console.log(Number.isInteger(23.0))
// console.log(Number.isInteger(23.3))
// console.log(Number.isInteger(23 / 0))
// console.log('')
// console.log(Number.isInteger(12 / 2))
// console.log(Number.isInteger(21 / 2))

// // ********** RANDOM **********

console.log(Math.PI)
console.log(Math.random())


//  ************ ROUNDING DOWN / UP ***********
// round, ceil, floor

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
console.log('');

console.log(Math.ceil(23.3)) // 24
console.log(Math.ceil(23.9)) // 24
console.log('')

console.log(Math.floor(23.3)) // 23
console.log(Math.floor(23.9)) // 23
console.log('')

console.log(Math.ceil(-23.3)) // -23
console.log(Math.ceil(-23.9)) // -23
console.log('')

console.log(Math.floor(-23.3)) // -24
console.log(Math.floor(-23.9)) // -24
console.log('')

console.log((23).toFixed(3))
console.log((23.8).toFixed(0))
console.log((2.3453).toFixed(2))
console.log((-34.26).toFixed(5))