/*
Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
   by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
   converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake'
   methods, and with the getter and setter.

Test data:
- Data car 1: 'Ford' going at 120 km/h

*/

class Car{
    constructor(make, speed){
        this.make = make,
        this.speed = speed
    }

    accelerates(){
        this.speed += 10;
        return this.speed
    }

    brake(){
        this.speed -= 5;
        return this.speed
    }

    get speedUS(){
        return this.speed / 1.6
    }

    set speedUS(speed){
        speed = speed * 1.6
        this._speed = speed
    }
}

const ford = new Car('ford', 120);

console.log(ford);
console.log(ford.accelerates())
console.log(ford.accelerates())
console.log(ford.brake())

console.log(ford.speedUS)
ford.speed = 160
console.log(ford.speedUS)

