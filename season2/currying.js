//currying:

//function currying usingbind method:
let multiply = function(x, y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this, 2); //here first argument is 2 
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3); //here first argument is 3
multiplyByThree(5);

let multiplyBy = multiply.bind(this, 2 , 3); //here first argument x = 2 and second y = 3
multiplyBy(5); //here it igonres 5 as second argument

let multiply1 = multiply.bind(this, ); 
multiply1(5, 5);

//currying using closure:
let multiplyByClosure= function(x){
    return function(y){
        console.log(x * y);
    }
    
}
multiplyByClosure(10)(5);
let multiplyByNine = multiplyByClosure(9);
multiplyByNine(5);

let multiplyByEight = multiplyByClosure(8);
multiplyByEight(2);