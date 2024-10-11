//Throttling: is a technique used to limit how often a function is executed over a period of time. Unlike debouncing (which delays the function until the event stops firing), 
// throttling ensures that the function is called at regular intervals, regardless of how often the event is triggered.



const throttle = (func, limit) => {
    let flag = true;
    return function(){
        let context=this, args=arguments;
        if(flag ){
            func.apply(context, args); 
            flag=false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
    }
}

const expensive = () => { //if it takes arguments
    console.log('expensive function');
}

const betterFunction = throttle(expensive, 300);
window.addEventListener('resize', betterFunction);

