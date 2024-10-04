//callbacks are used to handle async operations in javascript
// callback hell is a situation where you have multiple nested callbacks which makes the code unreadable and difficult to maintain.

console.log('Namaste Javascript');

setTimeout(() => {
    console.log('season2')
}, 5000);

// console.log('Season2');
console.log('Season1');

//cart example
const cart = ['shoes', 'pants', 'shirt'];

//issues with callbacks are two: callback hell and inversion of control
//callback hell - we loss the controlof code when using callback hell
api.createOrder(cart, function () {
    api.proceedPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});

//inversion of control






