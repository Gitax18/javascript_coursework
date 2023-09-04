const lottery = new Promise((resolve, reject) => {
    if(Math.random() >= 0.5) resolve('You win the lottery')
    else reject('You lose the lottery')
});

lottery.then(res => console.log(res)).catch(err => console.error(err));