//polyfill for bind:
let name = {
    firstName: 'Prathyusha',
    lastName: 'Kurigala'
}

let printFullName = function(hometown, state, country){
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ' ' + state + ' ' + country );
}

let printMyName = printFullName.bind(name, 'chittoor', 'AP', 'India');
printMyName();

Function.prototype.myBind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
};

let printMyName2 = printFullName.myBind(name, 'Punganur', 'KA','India');
printMyName2();