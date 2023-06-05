 const arr = ['a', 'b', 'c', 'd', 'e'];

//  SLICE
console.log(arr.slice(0,3)) // a, b, c
console.log(arr.slice(-1)[0])
console.log('\n')

//SPLICE
console.log(arr.splice(-1))
console.log(arr)
console.log('\n')

// REVERSE
console.log(arr.reverse())
console.log(arr.reverse())
console.log('\n')

// CONCAT
const arr2 = [1, 2, 3, 4, 5]

console.log(arr.concat(arr2))
console.log(arr.concat(arr))
console.log(arr2.concat(arr))
console.log('\n')

// forEach()

// on array 
arr.forEach((e, i, a) => {
    console.log(`${i+1}: ${e} \n ${a}`)
    // setTimeout(()=> console.log(), 1000)
})

// on map
const classStrength = new Map([
    [12, '25 students'],
    [11, '28 students'],
    [10, '36 students'],
    [9, '32 students'],
]);

classStrength.forEach((val, key, map) => {
    console.log(`There are ${val} in class ${key}`)
})

// on set forEach loop work same as like on map but the difference
// is key is same as value as set dont have keys or indexa