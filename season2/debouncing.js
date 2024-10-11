//debouncing: is a technique used to limit the rate at which is funciton is called
//difference between two key stroke events is 300ms then only call the fucntion

//throttling: difference between the last function call and next function call is 300ms then only call the function

//debounce:
let counter = 0;
const getData = () => {
    //calls api and get data
    console.log('fetching data...', counter++);
}

const debounce = function(fn, delay){
    return function(){
        let timer;
        let context = this, args = arguments;
        clearTimeout(timer);
       timer = setTimeout(() => {
            getData.apply(context, args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);