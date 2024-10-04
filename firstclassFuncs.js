// what are first class functions?
// what are function statements, function expressions and function declarations?


greet();
// greetMe(); //this will give error as greetMe is not defined due to hoisting


//function statements are also called function declarations - this way of defining a function is called a function statement
function greet(){
    console.log('hi');
}
// greet();

//function expressions - this way of defining a function is called a function expression
// difference between function statement and function expression is that in hoisting.
var greetMe = function(){
    console.log('hello from me');
}
// greetMe();


//Anonymous function - a function without a name
// function (){} //this is an anonymous function


//Named Function Expressions:
var x = function greetYou(){
    console.log('Hello');
    console.log(greetYou);
}
x(); //this will give error as greetYou is not defined

//difference between parameters and arguments
var b = function (name, age){  //parameters
    console.log(name, age);
}
b('pinky', 30);  //arguments

//another ex:
var c = function(param1){
    console.log(param1);
}
c(function(){});

//first class functions: the ability to use functions as values, pass functions as arguments to other functions, return functions from other functions and assign functions to variables.
//functions are first class cictizens in javascript.
var a = function(param1){
    return function xyz() {

    }
}
console.log(a());

//Arrow functions:
var d = (param1) => {
    console.log(param1);
}