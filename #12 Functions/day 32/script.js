"use strict";

/*


// default parameters
function sum( a = 1 , b = 1 , c = 1 ) {
    console.log( a + b + c )
}

sum(1, 3, 4)
sum(1, 4)
sum()



// working with different types of arguments
const person = {
    name : 'john',
    age : 12
}

const personNum = 9898712345;
console.log(person)
console.log(personNum)
console.log()

function change(person, number){
    number = 876782123
    person.name = 'ginny'
    console.log(person)
    console.log(number)
    console.log()
}

change(person, personNum)

console.log(person)
console.log(personNum)
console.log()



// working with Higher Order function
let area, diameter, cicumference;

area = radi => {return Math.PI * (radi) ** 2 }
diameter =  radi => { return radi * 2  }
cicumference =  radi => { return ( 2 * Math.PI * radi ) }

// this is a higher order function bcz it is taking a function call callBack as a parameter.
function circleOperation(radi, callback){
    const output = []
    for (let i = 0; i < radi.length; i++){
        output.push(callback(radi[i]))
    }
    return output
}

const radiusOfACircle = [12, 13, 4, 34];

console.log(circleOperation(radiusOfACircle, area))
console.log(circleOperation(radiusOfACircle, diameter))
console.log(circleOperation(radiusOfACircle, cicumference))


 */

// function as returned values
const greet = greet => { return name => {return `${greet}, ${name}`}}
console.log(greet('hello')('gitanshu'));
    