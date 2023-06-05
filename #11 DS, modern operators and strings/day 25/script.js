/*  ********** ARRAY DESTRUCTURING **********


const restraun = {
    name : 'fooddie eatables',
    categories : ['veg', 'non-veg', 'italian', 'chinese'],
    main : ['pizza', 'garlic bread', 'pasta', 'chowmein', 'sandwich'],

    order : function (cateIndex, mainIndex) {
        return [this.categories[cateIndex], this.main[mainIndex]]
    }
}

const numbers = [1,2,3,4,[5,6,7]]

const [a='veg',b='pizza'] = restraun.order(2,2)
console.log(a,b)

*/


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
        monday: {
            open: 11,
            close: 8
        },
        tuesday : {
            open: 11,
            close: 5
        }
    },

  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },
  };

/*
// Destructuring Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
  
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);
  
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);
  
  
  // Nested objects
  const {
      fri: { open: o, close: c },
    } = openingHours;
    console.log(o, c);
    */
   
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);
   