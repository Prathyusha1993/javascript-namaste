//whta is async - alaways returns a promise
// what is await - await is a keyword which can only be used inside async functions
//how async await works behind the scenes

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 resolved value');
    }, 5000);
})

//async and await are used to handle promises
//example ofprmoses without async await
// function getData(){
//     p.then(res => console.log(res));
//JS engine will not wait for the promise to be resolve
//     console.log('namaste javascrpt')
// }
// getData();

//using async await for above ex
async function handlePromise() {
    console.log('I am calling before promise is resloved');
    const value = await p;
    //JS engine will wait for the promise to be resolved
    console.log('Namaste Javascript')
    console.log(value);

    const value2 = await p2;
    console.log('Namaste Javascript2')
    console.log(value2);
}
handlePromise();

//real world example of async await
const API_URL = 'https://api.github.com/users/prathyusha1993';

async function handleFetchUser() {
    //fetch is a promise it gives a response object which is readble stream converting into json object
    const data = await fetch(API_URL)
    //this is again a promise
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handleFetchUser();

//handleing errors in async await:
async function handleFetchUser() {
    //fetch is a promise it gives a response object which is readble stream converting into json object
    try{
        const data = await fetch(API_URL)
    //this is again a promise
    const jsonValue = await data.json();
    console.log(jsonValue);
    } catch(err){
        console.log(err);
    }
}

//another way
async function handleFetchUser() {
    //fetch is a promise it gives a response object which is readble stream converting into json object
        const data = await fetch(API_URL)
    //this is again a promise
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handleFetchUser().catch(err => console.log(err));