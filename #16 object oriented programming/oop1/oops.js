// building constructor function
// Identifier must be Capitalized
function Person(firstName, lastName, birthYear){
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear

    this.age = function (){
        return new Date().getFullYear() - this.birthYear
    }
}

const gitanshu = new Person('Gitanshu', 'Sankhla', 2004);
Person.prototype.description = function(){
    return `${this.firstName} ${this.lastName} is ${this.age()} years old.`
}

Person.prototype.species = "Homosapiens"

console.log(gitanshu.description());
// console.log(gitanshu.__proto__ === Person.prototype);
console.log(Person.prototype)