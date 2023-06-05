const person = {
    name : 'john doe',
    age : 27,
    friends : {
        frnd1 : {
            name : 'jane',
            age : 26
        },
        frnd2 : {
            name : 'williams',
            age : 28
        }
    }
}

console.log(person.friends.frnd3)
console.log(person.friends.frnd3 ?. name)
// console.log(person.friends.frnd3.name)

const numbers = {
    one : 1,
    two : 2,
    three : 3
}

console.log(Object.keys(numbers))
console.log()
console.log(Object.values(numbers))
console.log()
console.log(Object.entries(numbers))
