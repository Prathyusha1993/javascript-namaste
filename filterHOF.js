const arr = [5,1,3,2,6];

//odd elements in arr
const oddArr = arr.filter((item) => item % 2 != 0);
console.log(oddArr);

//even elements in arr
const evenArr = arr.filter((item) => item % 2 === 0);
console.log(evenArr);

//greter than 4
const greaterArr = arr.filter((item) => item > 4);
console.log(greaterArr);

//lessthan 4
const lesserArr = arr.filter((item) => item < 4);
console.log(lesserArr);

const users = [
    {firstName: 'Prathyusha', lastName:'Kurigala', age: 29},
    {firstName: 'donald', lastName:'Trump', age: 75},
    {firstName: 'Joe', lastName:'Biden', age: 80},
    {firstName: 'Alia', lastName:'Bhat', age: 26},
];

//firstname of all users wos age is less than 30
//we cna chian filter and map
const output = users.filter((user) => user.age < 30).map((user) => user.firstName);
console.log(output);