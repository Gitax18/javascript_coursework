const restaurant = {
    restauName : 'classico indiano',
    address : 'mount high hills, banglore, karnataka',
    establish : 2012,
    owner : 'arjun pillai',
    starterMenu : ['veg. manchurian', 'sweet corn soup', 'carrot pudding', 'chocolate sandwich', 'special desert'],
    mainCourseCategories : ['vegeterian', 'non-vegeterian', 'italian', 'north indian', 'south indian'],
    mainCourse : ['pizza', 'pasta', 'veg thali', 'tandoori roti', 'shahi panner', 'fish fry', 'chicken curry'],
    openingHours : {
        mon : {
            open : 8,
            close : 8
        },
        tue : {
            open : 8,
            close : 5,
        },
        wed : {
            open : 8,
            close : 7
        }
    } ,

    createFood : function(mainFood = 'pizza', ...indegrients){ // rest operator - pack operator
        console.log(`your order for  ${mainFood} with ${indegrients} is getting cooked by our chef.`)
        console.log('delivered soon')
    },

    orderDelivery : function (address, timing, ...food) { // rest operator - pack operator
        console.log(`your order for ${food} will be deliverd at ${address} at ${timing}.`)
    } 

}

// getting values and destructuring them.
const {tue : {open : o, close : c}, ...others} = restaurant.openingHours
console.log(o, c)
console.log(others)

// array of food you eant (index 0 must contain main food item)
const foodDetails  = ['pasta', 'white sauce', 'onions', 'olives', 'chilli flakes']

restaurant.createFood(...foodDetails); // spread operator - unpack values 
restaurant.orderDelivery('21, west house, jodhpur', '2 pm', ...foodDetails) // spread operator - unpack values

