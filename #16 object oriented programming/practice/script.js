// the contructor function
function Car(maker, color, model, highSpeed, accerlation, currentSpeed){
    this.maker = maker;
    this.color = color;
    this.model = model;
    this.highSpeed = highSpeed;
    this.accerlation = accerlation;
    this.currentSpeed = currentSpeed;
}

Car.prototype.stop = function (){
    if (this.currentSpeed > 0) this.currentSpeed -= 30;
    else this.currentSpeed = 0
    return this.currentSpeed
}

Car.prototype.move = function(){
        if (this.currentSpeed < this.highSpeed ) this.currentSpeed += this.accerlation;
        else if (this.currentSpeed > this.highSpeed) this.currentSpeed = this.highSpeed;
        return this.currentSpeed;
}

Car.prototype.description = function(){
    return `${this.color} colored ${this.maker} ${this.model} is currently moving with the speed of ${this.currentSpeed}`
}

const lambo = new Car('Lamborghini', 'Lime-Yellow', 'Huracan', 360, 20, 40);
/*
console.log(lambo.stop());
console.log(lambo.move());
console.log(lambo.move());
console.log(lambo.description())
console.log(lambo.move());
console.log(lambo.description())
console.log(lambo.move());
console.log(lambo.description())
console.log(lambo.move());
console.log(lambo.stop());
console.log(lambo.description())
console.log(lambo.stop());
console.log(lambo.description())
console.log(lambo.stop());
console.log(lambo.description())
console.log(lambo)
*/

class Person{
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    get age(){
        return new Date().getFullYear() - this.birthYear;
    }

    set _profession(prof){
        this.profession = prof;
    }
    
}


const gitanshu = new Person('Gitanshu Sankhla', 2004);
console.log(gitanshu);
console.log(gitanshu.age);
gitanshu.profession = 'SDE'
console.log(gitanshu.profession);

console.log(gitanshu);



