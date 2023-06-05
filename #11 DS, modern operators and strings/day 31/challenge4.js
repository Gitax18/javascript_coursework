/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):

    underscore_case
    first_name
    Some_Variable
    calculate_AGE
    delayed_departure

Should produce this output (5 separate console.log outputs):
    underscoreCase                ✅
    firstName                    ✅✅
    someVariable                ✅✅✅
    calculateAge               ✅✅✅✅
    delayedDeparture          ✅✅✅✅✅
*/
'use strict'

const text = document.querySelector('.text')
const btn = document.querySelector('.submit')

btn.addEventListener('click', () => {
    const value = text.value
    const values = value.split('\n')
    for (let i = 0; i < values.length ; i++){
        const trimmed = values[i].trim().toLowerCase()
        const [split1, split2] = trimmed.split('_')
        const result = split1+split2[0].toUpperCase()+split2.slice(1)
        console.log(result.padEnd(20), '✅'.repeat(i+1))
    }
})
