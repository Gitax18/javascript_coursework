/*  the for of loop

const foods = [ "chicken", "fish fry", "panner tikka", "pizza"];

for (let item of foods){
    console.log(item)
}

console.log('')
console.log(foods.entries())
console.log('')

for (let [sr, el] of foods.entries()){
    console.log(`${sr + 1}: ${el}`)
}

*/

const relatives = {
    john : {
        relation : 'friend',
        mobile : 9890912300 
    },
    mani : {
        relation : 'friend',
        mobile : 5898912300 
    },
    akshat : {
        relation : 'brother',
        mobile : 8880918700 
    }
}


const person = {
    name : 'himanshu',
    age : 19,
    
    // new techniques

    // getting property from outside of object (value = property)
    relatives,

    //  creating methods without using ':' and function keyword
    walk(steps){
        console.log(`${this.name} walks ${steps} steps.`)
    }
}

console.log(person)