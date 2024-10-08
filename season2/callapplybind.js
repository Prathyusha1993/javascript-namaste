let name = {
    firstName: 'Prathyusha',
    lastName: 'Kurigala'
}

let printFullName = function(hometown, state){
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ' ' + state) ;
}


//call: pass arguments indivdually
printFullName.call(name);
printFullName.call(name,'Chittoor', 'AP');

let name2 = {
    firstName: 'Sachin',
    lastName: 'Tendulkar'
}

//fucntion barrowing:
//barrowing funcions from other objects
printFullName.call(name2, 'Mumbai', 'Maharastra');

//apply: pass argument in arary
printFullName.apply(name2, ['Mumbai', 'Maharastra']);

//bind: gives a copy of method which can be invoked later
let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharastra');
console.log(printMyName);
printMyName();