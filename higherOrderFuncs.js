//higher order functions: a function that takes another function as an argument or returns a function is called a higher order function.

function x(){
    console.log('Namaste')
}

function y(x){  //y is a higher order func here and x is a callback func.
    x();
}

//exaample: this calcualtea area of a circle
const radius = [3, 1, 2, 4]; //this is a radius of four circles

const calculateArea = function (radius){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

//now lets calculate the circumference of the circle
const calculateCircumference = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2* Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

//now lets calculate the diameter of the circle
const calculateDiameter = function(radius){
    let output=[];
    for(let i=0;i<radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));

//optimizing the above code using higher order functions: 
//reusablitiy of code, modularity of code, and readability of code are usage of higher order functions.

// const radius1 = [3, 1, 2, 4];
const area = function (radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2* radius;
}

const calculate = function(radius, logic){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//writing above code usinig map fun:
console.log(radius.map(area));

//polyfill for map function:
Array.prototype.calculate = function( logic){
    const output=[];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
