//promise.all(): it takes an arrya of promises and waits for all of them to finish and gives array of results.
//promise.allSettled(): it takes array of promises and if all promises are settled it gives array of results. if any one fails it waits for all promises to be settled and gives array of results.
//promise.race(); it takes an arrayof promises and who finish first will be winner and gives the result. it gives a value first that is settled or rejcted 
//promise.any(): it takes an array of promises and it will wait for first promises to get success. if first promises fails it will check for next one and if that also fails it will checkfor next one and if its success returns value.
//if all promises form promise.any() is failed then it will return aggregate error.


//promise.all():
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 success');
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 success');
    }, 1000);
    // setTimeout(() => {
    //     reject('P2 fail');
    // }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('P3 success');
    // }, 2000);
    setTimeout(() => {
        reject('P3 fails');
    }, 2000);
})
Promise.all([p1, p2, p3]).then((result) => console.log(result)).catch((error) => console.error(error));

//promise.allSettled():
Promise.allSettled([p1,p2, p3]).then((result) => console.log(result)).catch((error) => console.error(error));   

//promise.race():
Promise.race([p1, p2, p3]).then((result) => console.log(result)).catch((error) => console.error(error));


//promise.any():
Promise.any([p1, p2, p3]).then((result) => console.log(result)).catch((error) => console.error(error));