//sum(1)(2)(3)(4)......()

let sum = function (a) {
    return function (b){
        return function (c) {
            return function (d){
                return a+b+c+d;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));

//doing it recursively
let sum1 = function(a){
    return function(b){
        if(b){
            return sum1(a+b);
        }
        return a;
    }
}

console.log(sum1(1)(2)(3)(4)(5)());

//writing above coding using ES6
let sum2 = a => b => b ? sum2(a+b) : a;
console.log(sum2(1)(2)(3)(4)(5)());