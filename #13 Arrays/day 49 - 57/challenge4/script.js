/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:

1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
    the recommended food portion and add it to the object as a new property. Do
    not create a new array, simply loop over the array. Forumla:
    recommendedFood = weight ** 0.75 * 28. (The result is in grams of
    food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too
    little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
    the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much
    ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
    ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
    Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
    too little!"

5. Log to the console whether there is any dog eating exactly the amount of food
    that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food
    (just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try
    to reuse the condition used in 6.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
    portion in an ascending order (keep in mind that the portions are inside the
    array's objects 😉)

    Hints:
 - Use many different tools to solve these challenges, you can use the summary
    lecture to choose between them 😉

-  Being within a range 10% above and below the recommended portion means:
    current > (recommended * 0.90) && current < (recommended *
    1.10). Basically, the current portion should be between 90% and 110% of the
    recommended portion.
*/

// Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];


// calculating recommended food quantity for each dog in the array
dogs.forEach(dog => {
    const recommendedFood = dog.weight ** 0.75 * 28
    dog.recommendedFood = Math.round(recommendedFood) + ' g';
    console.log(dog)
});
console.log('')

// finding owner sarah and checking whether its dogs each too much or too little 
const sarahdog = dogs.find(dog => dog.owners.includes('Sarah'))

function checkDogPortion(dog){
    const recomFoodCorrectFormat = Number(dog.recommendedFood.replace(' g',''))
    const portionRange =  Math.round( recomFoodCorrectFormat* 0.1)
    let checkPortion = undefined

    if (dog.curFood > (recomFoodCorrectFormat - portionRange) 
        && dog.curFood < (recomFoodCorrectFormat + portionRange)) {
            checkPortion = 'Ok'
        } else if (dog.curFood > recomFoodCorrectFormat + portionRange){
            checkPortion = 'Too MUCH'
        } else {
            checkPortion = 'too little'
        }
    
    return checkPortion
}
console.log(checkDogPortion(sarahdog))
console.log('')

//  creating list of owners whose dogs eats too much and too little
const ownersEatTooMuch = []
const ownersEatTooLittle = []


dogs.forEach(dog =>{
    if (checkDogPortion(dog) == 'Too MUCH'){
        ownersEatTooMuch.push(...dog.owners)
    } else if (checkDogPortion(dog) == 'too little'){
        ownersEatTooLittle.push(...dog.owners)
    }
})

console.log(ownersEatTooMuch)
console.log(ownersEatTooLittle)
console.log('')

// fucntion to print string of owners who eats too much and too little 
console.log(`${ownersEatTooMuch.join(' and ')} dogs eats too much`)
console.log(`${ownersEatTooLittle.join(' and ')} dogs eats too little`)
console.log('')

// checking is there is any dog who eats ok amount of food 
console.log(dogs.some(dog => checkDogPortion(dog) === 'Ok'))
console.log('')

// dogs who eat ok amount of food
dogs.forEach(dog=> {
    if(checkDogPortion(dog) === 'Ok') {
    console.log(`${dog.owners} dog eats okay amount of food.`)
    }
})
console.log('')

// sort according to recommonded food quatity
const sorted = dogs.slice().sort((a,b)=>Number(a.recommendedFood.replace(' g','')) - Number(b.recommendedFood.replace(' g', '')))
console.log(sorted)
