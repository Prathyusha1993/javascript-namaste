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
        resolve('Payment is done');
        
    })
}

function showOrderSummary(paymentInfo){
    return new Promise((resolve, reject) => {
        resolve('Order summary is shown');
    })
}

function updateWallet(paymentInfo){
    return new Promise((resolve, reject) => {
        resolve('wallet is updated');
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
// .then((paymentInfo) => {
//     showOrderSummary(paymentInfo);
// })
// .then((paymentInfo) => {
//     console.log(paymentInfo);
//     return paymentInfo;
// })
// .then((paymentInfo) => {
//     updateWallet(paymentInfo);
// }).then((paymentInfo) => {
//     console.log(paymentInfo);
// })
.catch(error => console.log(error.message));


//ANOTHER EXAMPLE:
const promise1 = new Promise((resolve,reject) => {
    if(true){
        resolve('Uber has arrived');
    }
})

promise1.then((message) => {
    console.log(message);
})
.catch((error) => console.log(error.message));

//ex:
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I Love You');
    }, 1000)
});

promise2.then((value) => {
    document.getElementById('demo').innerHTML = value;
})