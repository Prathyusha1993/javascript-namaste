//window and this refers to the global scope
var a=10;
function b() {
    var x=10;
}
console.log(a);
console.log(window.a);
console.log(this.a);
console.log(x);