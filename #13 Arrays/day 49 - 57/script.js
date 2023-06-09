'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = { 
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// creating usernames
createUsername(accounts)

// setting global variable for current active user
let currentAccount;

// ************************ Handling Events ***********************

// managing login user
btnLogin.addEventListener('click', function(e){
  e.preventDefault()

  // .checking entered username
  const account = accounts.find(acc=> acc.username === inputLoginUsername.value)
  // checking enter pin (if correct inserted relevent data)

  if (account?.pin === Number(inputLoginPin.value)){
    // emptying inputs
    inputLoginUsername.value = ''
    inputLoginPin.value = ''
    inputLoginPin.blur()
    inputLoginUsername.blur()

    // setting value of current active account in global varible
    currentAccount = account
    
    // displaying welcome text
    labelWelcome.textContent = `Welcome, ${account.owner.split(' ')[0 ]}`
    // displaying main container
    containerApp.style.opacity = '1';

    // displaying ui
    displayUI(account)
    
  }else{
    alert(`wrong credentials`)
  }

  // event ends
})



// event to transfer money
btnTransfer.addEventListener('click', function(e){
  e.preventDefault()

  const transferAccount = accounts.find((acc)=> inputTransferTo.value === acc.username)
  const transferAmount = Number(inputTransferAmount.value)
  
  inputTransferAmount.value = inputTransferTo.value = '';

  if(transferAmount > 0 && // amount to be transfer must be greater than 0
    transferAccount && // transferring account must be exist 
    currentAccount.balance > transferAmount){ // transfer amount must be less than total balance
      transferAccount.movements.push(transferAmount)
      currentAccount.movements.push(-transferAmount)
      
      displayUI(currentAccount)
    }else alert('Wrong username, or wrong amount format')

    // event ends

})

// event to delete account
btnClose.addEventListener('click', function(e){
  e.preventDefault()

  const acctToBeClose = inputCloseUsername.value
  const acctClosePin = Number(inputClosePin.value) 

  if(acctToBeClose == currentAccount.username &&
    acctClosePin == currentAccount.pin){
      const confirmClose = prompt('are you sure to close your account(y/n)')
      if (confirmClose == 'y'){
        const acctIndex = accounts.findIndex((acc)=>acc.username === acctToBeClose)
        console.log(accounts.splice(acctIndex,1))
        containerApp.style.opacity = '0'
      }
    }

    inputCloseUsername.value = inputClosePin.value = '';
    // event ends
})

// event to gave loan.
/* 
LOAN CONDITION:
User accounts must contain deposit which is 
25% of his current loan request if it is not 
don't gave laon.

x% of y is z
25% of deposit is loan

(x/100)y=z
0.25 * deposit >= loan
*/
btnLoan.addEventListener('click',e=>{
  e.preventDefault()
  const loanAmt = Number(inputLoanAmount.value)

  const conditionCheck = currentAccount.movements.some(ele => (25 * ele) / 100 >= loanAmt )
  console.log(conditionCheck)
  if (conditionCheck && loanAmt > 0){
    currentAccount.movements.push(loanAmt)
    inputLoanAmount.value = ''
    displayUI(currentAccount)
  } else alert('loan amount must not exceed 25% of any deposit')

// event ends
})


// function to sort the movements
let isSort = false 
btnSort.addEventListener('click', (e)=>{
  e.preventDefault()

  displayMovements(currentAccount.movements, !isSort)
  isSort = !isSort

  // event ends
})




// ******************* Writing functions **********************
// function to display ui
function displayUI(account){
  // displaying cashflow
  displayMovements(account.movements)
  // calculating deposits, withdraws and balances
  collectsDeposits(account)
  collectsWithdrawals(account)
  totalBalance(account)
  
  // adding summary
  addSummary(account)

  // function ends
}

// function to display the cash flow movements
function displayMovements(movements, sort = false){
    // emptying the parent container to add new contents
    containerMovements.innerHTML = '';
    
    // checking condition for sort
    const movs = sort ? movements.slice().sort((a,b)=> a-b) : movements;

    // addin new cash movements from movements array
    movs.forEach((mov, ind) => {

        // checking movement type (+ means deposit and - means withdraw)
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        // new movement row to be add in movements container in index.html
        const newHtmlContent = `
        <div class="movements__row">
            <div class="movements__type movements__type--${ type } ">${ ind + 1 } ${ type }</div>
            <!-- <div class="movements__date">3 days ago</div> -->
            <div class="movements__value">${mov} ₹</div>
        </div>
        ` 
        containerMovements.insertAdjacentHTML('afterbegin', newHtmlContent)
        // containerMovements.innerHTML =    newHtmlContent
    })

  // function ends
};

// function to create usernames 

function createUsername(accs){
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(ele => ele[0]).join('');
  })
};

// function to collect deposits
function collectsDeposits(acc){ // acc is an object
  acc.deposit = acc.movements.filter(ele => ele > 0)
  return acc.deposit
};

// function to collect withdrawals
function collectsWithdrawals(acc){ // acc is an object
  acc.withdraw = acc.movements.filter(ele => ele < 0)
  return acc.withdraw
};

// function to calculate balance
function totalBalance(acc){
  acc.balance = acc.movements.reduce((acc, ele) => acc + ele, 0)
  labelBalance.textContent = `${acc.balance} ₹`
  return acc.balance

// function ends
};

// function to add summary and calculating intrest
function addSummary(account){
  // adding deposits
  const deposits = account.movements
                    .filter(mov => mov > 0)
                    .reduce((acc, dep) => acc + dep, 0)

  labelSumIn.textContent = `${deposits} ₹`

  // adding withdrawals
  const withdraws = account.movements
                      .filter(mov => mov < 0)
                      .reduce((acc, wit) => Math.abs(wit) + acc, 0)
  
  labelSumOut.textContent = `${withdraws} ₹`

  // calculating interest 
  
  const interest = account.movements
  .filter(mov => mov > 0)
  .map(dep => (dep * account.interestRate)/100)
  .filter(amt => amt >= 1)
  .reduce((acc, amt) => acc + amt, 0)

  labelSumInterest.textContent = `${Math.round(interest)} ₹`

// function ends
}



/////////////////////////////////////////////////

