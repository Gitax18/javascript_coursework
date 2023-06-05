/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

let markWeight = 95
let markHeight = 1.88
let markBMI = markWeight / (markHeight**2)

let johnWeight = 85
let johnHeight = 1.76
let johnBMI = johnWeight / (johnHeight**2)

// let markHigherBMI = markBMI >= johnBMI
if (markBMI > johnBMI){
    alert(`mark (${markBMI}) bmi is higher than john (${johnBMI}).`)
} else{
    alert(`john (${johnBMI}) bmi is higher than mark (${markBMI}).`)
}

