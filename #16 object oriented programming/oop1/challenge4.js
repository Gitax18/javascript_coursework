/*
Your tasks:

1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
    child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
    methods of this class, and also update the 'brake' method in the 'CarCl'
    class. Then experiment with chaining!

Test data:
- Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerates = function(){
        this.speed += 10
        console.log(`car is accelerating at ${this.speed}km/h`);
    }
    
    brake = function(){
        this.speed -= 5
        console.log(`car is retarding ar ${this.speed}km/h`);
        return this
    }
}

class EV extends Car{
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery = function(chargeTo){
        this.#charge += chargeTo
        return this

    }
    
    accelerates = function(){
        this.speed += 20;
        this.charge -=1;
        console.log( `${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`)
        return this
    }
}

const Rivian = new EV('Rivian', 120, 23);
Rivian.accelerates().chargeBattery(45).accelerates().brake();

// console.log(Rivian.charge)
// console.log(Rivian.#charge)