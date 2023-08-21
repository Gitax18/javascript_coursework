
// This Product object can be used as prototype 
const Product = {
    company: 'Raymond Gucci',
    product_type: 'jacket',
    designer: 'Paterick Bateman'
}

// instance of Product Object
const redHoody = Object.create(Product)
redHoody.color = 'red';
redHoody.sizes = ['sm', 'md', 'xl', 'xxl'];
redHoody.product_number = 65774;

const blueHoody = Object.create(Product)
blueHoody.color = 'blue';
blueHoody.sizes = ['xl', 'xxl', 'xxxl'];
blueHoody.product_number = 10989;

console.log(redHoody)
console.log(blueHoody)

// proto of these instances is the Product Object itself
console.log(redHoody.__proto__ === Product) // true
