//  this file contains all the source code that I learn in course

const array = [1, 2, 3, 4, 5]
// map is just same as forEach but it returns new array
const newArr = array.map(ele => ele ** 2)

// console.log(array)
// console.log(newArr)

const filterArr = array.filter(ele => ele > 3)
// console.log(filterArr)

const total = array.reduce((acc, ele) => acc + ele, 0);
console.log(total) 

// findIndex method : use to find index of element which satisfy a particular condition
const sum4 = array.findIndex( ele => (ele + ele) == 4)
console.log(sum4)

// some and every method

const newArray = [12,32,-19 ,98 ,56 ,35]
// function to check that argument must be greater than 50.
const checkGreater50 = ele => ele > 50

// some method loops array with callback and return true if some or one element satisfy the condition
console.log(newArray.some(checkGreater50))
// every method loops array with callback and return true if all element satisfy the condition
console.log(newArray.every(checkGreater50))

console.log('')

const shalCop = newArray.slice()
shalCop.push([23,34])
console.log(shalCop.flat())

// Array from : creating arrays programatically

const arr = Array.from({length: 100}, (ele)=> ele = Math.round((Math.random()* 5) + 1))

console.log(arr)
console.log()
