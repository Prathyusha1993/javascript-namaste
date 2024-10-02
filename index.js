//synchronous callback function:
function greet(name, callback) {
    console.log(`Hellio, ${name}!`);
    callback();
}

function callMe() {
    console.log('I am callback function');
}
greet('Pinky', callMe);

// asynchoronous callback func:
function asynchoronous(callback) {
console.log('start of asynchoronous func');
setTimeout(() => {
    callback();
}, 2000)
console.log('end of async task');
}

function callback() {
    console.log('this is callback func');
}

asynchoronous(callback);

//recursive function: function calling itself some where inside the body of function is called recursive func
function recur(n) {
if( n === 0){
    console.log('task completed');
}
else {
    console.log('im doing something')
    recur(n-1);
}
}
recur(3);

//example of recursive func:
function recursive(n){
    if(n !== 0){
        return n + recursive(n-1);
    }else {
    return n;
    }
}
console.log(recursive(5));

//non repeating char in string:
function nonRepeatingChar(str) {
let res = null;
for(let i=0; i<str.length; i++){
    let char = str[i];
    if(str.indexOf(char) === str.lastIndexOf(char)){
        res = str[i];
        break;
    }
}
console.log('input', str);
console.log('output', res);
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('b'));

}

nonRepeatingChar('abcab');
nonRepeatingChar('madam');
nonRepeatingChar('pinky');
nonRepeatingChar('text');