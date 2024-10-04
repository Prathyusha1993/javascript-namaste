const cart = ['shoes','pants', 'shirts', 'iphone'];

// createOrder(cart, function (){   //orderid
//     proceedToPayment(orderId);
// });  

//to slove inversion of control problem by using callbacks we can use promises
//promises are used to handle async operations in javascript
// const promise = createOrder(cart);
// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// })

const GITHUB_API = 'https://api.github.com/users/Prathyusha1993';
const user = fetch(GITHUB_API);
console.log(user);

//promise chaining
createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo) {
    return updateWallet(paymentInfo);
});


