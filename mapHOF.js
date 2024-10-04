const arr = [5,1,3,2,6];

//double - [10,2,6,4,12]
const double = arr.map((item) => item * 2);
console.log(double);

//triple - [15,3,9,6,18]
const triple = arr.map((item) => item * 3);
console.log(triple);

//binary - ['101', '1', '11', '10', '110']
const binary = arr.map((item) => item.toString(2));
console.log(binary);

//tricky in map
const users = [
    {firstName: 'Prathyusha', lastName:'Kurigala', age: 29},
    {firstName: 'donald', lastName:'Trump', age: 75},
    {firstName: 'Joe', lastName:'Biden', age: 80},
    {firstName: 'Alia', lastName:'Bhat', age: 31},
];

//list of fullname of all users
const fullName = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
})
console.log(fullName);