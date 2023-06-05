const person1 = {
    name: 'john',
    birth: 2002,
    age(today){
        const age = today - this.birth;
        return age
    }
}

console.log(person1.age(2023))

const person2 = {
    name: 'emily',
    birth: 2004
}

// call method
const person2Age = person1.age.call(person2, 2023)
console.log(person2Age)

// apply method
const person2Age2 = person1.age.apply(person2, [2023]) // same as call but accept parameters in array
console.log(person2Age2)
