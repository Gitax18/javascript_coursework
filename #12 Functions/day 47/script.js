// immediately invoked function expression (IIFE)
(function (){
    console.log('This function will run only once')
})();

// closures

function counterNumber(){
    let count = 0;

    return function increment(){
        count++
        console.log(count)
    }
}

const counter = counterNumber()

/* the below function has access to count varible even after 
execution of counterNumber function because of closure('means function never leave access to parent enviroment variables.') */

counter()
counter()