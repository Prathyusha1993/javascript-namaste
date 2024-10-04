const arr = [5,1,3,2,6];

//reduce - to find sum or max number in arr

function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++ ) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//above ex using reduce
const sum =arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);
console.log(sum);

//maxx value in arr
function maxValue(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue(arr));


//using reduce
const output = arr.reduce((max, curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);
console.log(output);

const users = [
    {firstName: 'Prathyusha', lastName:'Kurigala', age: 29},
    {firstName: 'donald', lastName:'Trump', age: 75},
    {firstName: 'Joe', lastName:'Biden', age: 80},
    {firstName: 'Alia', lastName:'Bhat', age: 29},
];

// {29:2, 75:1, 80:1}
const output1 = users.reduce((acc, curr) => {
if(acc[curr.age]){
    acc[curr.age] = acc[curr.age] + 1;
} else {
    acc[curr.age] = 1;
}
return acc;
}, {});
console.log(output1);