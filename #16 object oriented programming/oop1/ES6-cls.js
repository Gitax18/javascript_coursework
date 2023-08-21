class Person {
    constructor(fname, lname, birthyear){
        this.firstName = fname
        this.lastName = lname
        this.birthyear = birthyear
    }

    age(){
        return new Date().getFullYear() - this.birthyear
    }

    description(){
        return `${this.firstName} ${this.lastName} is ${this.age()} years old.`
    }

}

const gitanshu = new Person('gitanshu', 'sankhla', 2004)

// console.log(gitanshu.firstName, gitanshu.lastName)
// console.log(gitanshu.description())

const obj = {
    name: 'gitanshu',
    birthyear: 2004,

    

    get age (){
        return  2023 - this.birthyear
    },
    
    set religion(rel){
        this._religion = rel;
    },
    
    set age(birthyear){
        this._age = 2023 - birthyear
    }
 
}

// obj.age = 2007

obj.religion = 'hindu'
console.log(obj.age) // age from getter
obj.age = 2004 // setting new age from setter 
console.log(obj) // age change due to setter property
