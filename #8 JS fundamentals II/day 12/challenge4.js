/*

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
    4.1. First, you will need to add up all values in the array. To do the addition,
        start by creating a variable 'sum' that starts at 0. Then loop over the
        array using a for loop. In each iteration, add the current value to the
        'sum' variable. This way, by the end of the loop, you have all values
        added together
   
    4.2. To calculate the average, divide the sum you calculated before by the
        length of the array (because that's the number of elements)
    
    4.3. Call the function with the 'totals' array

 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


function calcTip(bills){
    let tips = []
    let totals = []
    for( let billno = 0; billno < 10; billno++){
        if ( bills[billno] > 50 && bills[billno] < 300 ) {
            let tip =  ( bills[billno] / 100 ) * 15
            tips.push(tip)
            totals.push(tip + bills[billno])
        } else {
            let tip =  ( bills[billno] / 100 ) * 20
            tips.push(tip)
            totals.push(tip + bills[billno])
        }
    }
    console.log(tips)
    console.log(totals)
    return totals

}

const totals = calcTip(bills)

function calcAverage(arr) {
    // summing numbers
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(totals));