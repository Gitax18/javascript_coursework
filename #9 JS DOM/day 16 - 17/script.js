'use strict'
// getting overlay
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.close')

// getting buttons
let newgame = document.querySelector('.newgame');
let roll = document.querySelector('.roll');

// getting img tag
let img = document.querySelector('img');
let title = document.querySelector('.main-title')
let scorecon = document.querySelectorAll('.current-score-container')

// getting player 1 elements
let player0 = document.querySelector('.player_0');
let player0Main = document.querySelector('.player_0_score');


let player0dice = document.querySelector('.player0current');

// getting player 2 elements
let player1 = document.querySelector('.player_1');
let player1Main = document.querySelector('.player_1_score');

let player1dice = document.querySelector('.player1current');

player0Main.textContent = 0
player1Main.textContent = 0


let activePlayer, dice, score0, score1;

activePlayer = 0;
score0 = 0
score1 = 0


// making overlay work
function closeOverlay(){
    if (!overlay.classList.contains('hidden')){
        overlay.classList.add('hidden');
    }
}

// closing overlay on clicking close button and escape key
close.addEventListener('click', closeOverlay)
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        closeOverlay();
    }
})

// adding functionalities to roll click
roll.addEventListener('click' , function () {
    img.classList.remove('hidden');
    dice = Math.trunc(Math.random()*7);
    img.setAttribute('src',`${String(dice)}.png`);
    switch (activePlayer){
        case 0:
            player1.classList.remove('active')
            player0.classList.add('active')

            roll.classList.remove('player_0_active')
            roll.classList.add('player_1_active')
            newgame.classList.remove('player_0_active')
            newgame.classList.add('player_1_active')


            scorecon[0].classList.add('score-active')
            scorecon[1].classList.remove('score-active')

            player0dice.textContent = dice
            player1dice.textContent = '-'


            if (dice !== 0){
                if (score0 < 50){
                    score0 += dice;
                    player0Main.textContent = score0;
                    if (score0 >= 50){
                        title.textContent = '🏆 player 1 wins'
                        roll.disabled = true
                        break
                    }
                } else{
                    break;
                }

            } else {
                player0Main.textContent = 0;
                score0 = 0;
                break;
            }
            break;
        case 1:
            player0.classList.remove('active')
            player1.classList.add('active')

            roll.classList.remove('player_1_active')
            roll.classList.add('player_0_active')
            newgame.classList.remove('player_1_active')
            newgame.classList.add('player_0_active')

            scorecon[1].classList.add('score-active')
            scorecon[0].classList.remove('score-active')

            player1dice.textContent = dice
            player0dice.textContent = '-'
            if (dice !== 0){    
                if ( score1 < 50){
                    score1 += dice;
                    player1Main.textContent = score1;
                    if (score1 >= 50){
                        title.textContent = '🏆 player 2 wins'
                        roll.disabled = true
                        break;

                    }
                } else {
                    break
                }
            } else {
                player1Main.textContent = 0;
                score1 = 0;
                break;
            }
            break;
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
})


// adding functionalities to newgame click 
newgame.addEventListener('click', function(){
    title.textContent = '🎲Diceee🎲'
    img.classList.add('hidden')
    player1.classList.remove('active')
    player0.classList.add('active')
    roll.classList.remove('player_1_active')
    roll.classList.add('player_0_active')
    newgame.classList.remove('player_1_active')
    newgame.classList.add('player_0_active')
    score0 = 0
    score1 = 0 
    player0Main.textContent = 0;
    player1Main.textContent = 0;
    roll.disabled = false
    player0dice.textContent = '-'
    player1dice.textContent = '-'

}) 