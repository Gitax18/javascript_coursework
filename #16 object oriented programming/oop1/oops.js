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

console.log(gitanshu)