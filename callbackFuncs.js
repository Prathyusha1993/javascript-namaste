//what is callback function in javascript?
//Javascript is a synchronous and single-threaded language.
//blocking the main thread
//power of callbacks?
//deep about event listeners
//closures demo with event listeners
//scope demo with event listeners
//garbage collection and remove event listeners

//what is callback function in javascript?
//callback function is a function that is passed to another function as a parameter and the callback function is called inside the outer function.

setTimeout(function () {
    console.log('Timer');
}, 5000);

function x(y) {
    console.log('x');
    y();
}
x(function () {
    console.log('Y');
});

//deep about event listeners
document.getElementById('clickme').addEventListener('click', function xyz(){console.log('button clicked')});

//closures demo with event listeners
//one way is to do this but here variable count not in privacy
let count = 0;
document.getElementById('clickme').addEventListener('click', function xy(){console.log('button clicked', ++count)});

//another way is to do this but here variable count is in privacy
function attachEventListetners(){
    let count = 0;
    document.getElementById('clickme').addEventListener('click', function increment(){console.log('button clicked', ++count)});
}
attachEventListetners();

//garbage collection and remove event listeners
//event listeners are heavy that means is takes memory