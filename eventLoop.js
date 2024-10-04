console.log('start');
setTimeout(() => {
    console.log('callback');
}, 5000);

console.log('end');


//another ex:
console.log('start');
document.getElementById('btn').addEventListener('click', function cb() {
    console.log('button clicked');
});
console.log('end');

//another ex:
console.log('start');
setTimeout(function cbT() {
    console.log('CB settimeout')
}, 5000);

fetch('https://apinetflix.com')
.then(function cbf() {
    console.log('cb netflix');
});
console.log('end'); 