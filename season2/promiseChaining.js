const cart = ['shoes','pants', 'shirts', 'iphone'];

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        //createorder
        //validateorder
        //orderid
        if(!validateOrder(cart)){
            const err = new Error('Cart is not valid');
            reject(err);
        }
        const orderId = '1234';
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    })
    return pr;
};

function proccedToPayment(orderId){
    return new Promise((resolve, reject) => {
        resolve('Payment is successfull');
    })
}

function validateOrder(cart){
    return true;
};

createOrder(cart)
.then((orderId) => {
    console.log(orderId);
    return orderId;
})
.then((orderId) => {
   return proccedToPayment(orderId);
})
.then((paymentInfo) => {
    console.log(paymentInfo);
    return paymentInfo;
})
.catch(error => console.log(error.message));