console.log('start');
function cb(){
    console.log('callback');
}
setTimeout(cb, 0);
console.log('end');