function x() {
    var a = 13;
    function y() {
        console.log(a);
    } 
    return y;
}
var z = x();
console.log(z);
z();

function outer() {
    let b=100;
    function inner(){
        console.log(b);
    }
    b=1000;
    inner();
}
outer();

function outer1(){
    var c = 'Hello';
    function inner1(){
        var d = 'World';
        function inner2(){
            console.log(c, d);
        }
        inner2();
    }
    inner1();
}
outer1();

//closures with setTimeout:
function x1(){
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 1000);
    console.log('Namaste Javascript');
}
x1();

// function x2(){
//     for(var i=1; i<=5; i++){ //copy of i refereing to same memory locaiton
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     }
// }
// x2();

function x3(){
    for(let i=1; i<=5; i++){  //let is block scope so eevrytime i is new variable.
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}
x3();

//above example using closures with setTimeout:
function x4(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log('Namaste Javascript');
}
x4();

function outer(b) {
    function inner() {
        console.log(a, b);
    }
    let a=10;
    return inner;
}

var close = outer('hello world');
close();

function outest(){
    var c=200;
    function outer(b){
        let a=100;
        function inner(){
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
}

let a = 1000; //tries to find in outer scope in its lexical environment if not found then goes to global scope.
var close = outest()('Hello Prathyusha');
close();

//counter ex with closures:
function counter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
counter2();

//above counter example with counstructor function:
function Counter1(){
    let count = 0;
    this.incCounter = function(){
        count++;
        console.log(count);
    }
    this.decCounter = function(){
        count--;
        console.log(count);
    }
}
var counterObj = new Counter1();
counterObj.incCounter();
counterObj.incCounter();
counterObj.decCounter();