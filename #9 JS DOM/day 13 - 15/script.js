/*
Checklist of the project

1. select all the elements.
2. check the selected elements. 
3. add event listener to check button.
4. write conditions for empty input,
    high/low input, NaN and correct number.
5. change the background on winning the game.
6. write the score and highscore functionality.
7. write the event listener for restart button.
8. check the working with unintented inputs.
9. check working on mobile (iphone, android).

*/

'use strict';

// html main element
const body = document.querySelector('body');

// text elements
let secretNum = document.querySelector('.secretNumber');
let messageText = document.querySelector('.secondary-title');
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')

// button elements
const restartBtn = document.querySelector('.restart');
const checkBtn = document.querySelector('.check');

// user input elements 
let userInput = document.querySelector('.input-number');

// the random secret number
let randomSecretNumber = Math.trunc(Math.random()*20)+1


// getting current score and highscore
let curScore = 10
let curHighScore = 0


// functions (applying DRY(Dont repeat yourself) Principle)
function reduceScore(){
    if (curScore > 1){
        curScore -= 1 
        score.textContent = curScore
    } else{
        score.textContent = 0
        messageText.textContent = '🥺 Game Over! click Restart'
    }
}


// add click event to check button
checkBtn.addEventListener('click', function (){
    let number = Number(userInput.value)

    // if empty
    if (!number || number > 20 || number < 0){
        messageText.textContent = '⚠️ Please enter a valid Number'

    } else if (number == randomSecretNumber ){
        messageText.textContent = '🥳 correct number! Restart to play Again'
        secretNum.textContent = randomSecretNumber
        body.style.backgroundImage = 'linear-gradient(to right, #4ade80, #15803d)'
        // disabling check button and input
        checkBtn.disabled = true
        checkBtn.style.opacity = '0.2'
        userInput.disabled = true
        userInput.style.opacity = '0.2'

        // changing highscore
        if (curScore > curHighScore){
             curHighScore = curScore
             highscore.textContent = curHighScore
        }

    } else if (number > randomSecretNumber) {
        messageText.textContent = `${userInput.value}  is 📈 too High`
        userInput.value = ''
        reduceScore()
        
    } else if (number < randomSecretNumber){
        messageText.textContent = `${userInput.value}  is 📉 too Low`
        userInput.value = ''
        reduceScore(curScore, score)
    }
})

// add click event to restart game 
restartBtn.addEventListener('click', function (){
    // setting score back to 10 and new secret number
    curScore = 10
    randomSecretNumber = Math.trunc(Math.random()*20)+1

    // setting body color to default
    body.style.backgroundImage = 'none'
    body.style.backgroundColor = '#1b1c1e';

    // setting default content
    secretNum.textContent = '?'
    userInput.value = ''
    score.textContent = curScore    
    messageText.textContent = '🤔 Start guessing...'

    // enabling check button and input field
    checkBtn.disabled = false
    checkBtn.style.opacity = '1'
    userInput.disabled = false
    userInput.style.opacity = '1'

})