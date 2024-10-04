console.log('start');

setTimeout(() => {
    console.log('callback');
}, 5000);

console.log('end');

//blocking code: by writing the millions of lines of code in the main thread, 
// the main thread will be blocked and the user will not be able to interact with the application.

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log('while loop end');