const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const expenseLimit = {
  jonas: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user = "jonas") {
  user = user.toLowerCase();

  let lim = expenseLimit[user] ? expenseLimit[user] : 0;

  if (value <= lim) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpense = function () {
  for (const el of budget) {
    let lim = expenseLimit[el.user] ? expenseLimit[el.user] : 0;

    if (el.value < -lim) {
      el.flag = 'limit';
    }
    
  }
};
checkExpense();

console.log(budget);

const bigExpenses = function (limit) {
  const output = '';
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
