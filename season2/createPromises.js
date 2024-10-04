const cart = ['shoes','pants', 'shirts', 'iphone'];

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        //createorder
        //validatecart
        //orderId
        if(!validateCart(cart)){
            const err = new Error('cart is not valid');
            reject(err);
        }
        //logic for create order
        const orderId = '12345';
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
            
        }
    });
    return pr;
}

function validateCart(cart){
    return false;
}

const promise = createOrder(cart);
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
})
.catch(error => console.log(error)); 

