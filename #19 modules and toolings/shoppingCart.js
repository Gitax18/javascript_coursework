const cart =[];

export const addToCart = (quantity, product)=>{
    cart.push({quantity, product});
    console.log(`${quantity} ${product} added to cart`);
}

export const showCart = ()=>{
    console.log(cart);
}

export const removeFromCart = (product)=>{
    const pr = cart.findIndex(prdt => prdt.product == product);
    console.log(`index of removing "${product}" is ${pr} and it is removed`)
    cart.splice(pr, 1);
}

