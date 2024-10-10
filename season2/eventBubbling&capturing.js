document.querySelector('#grandparent')
.addEventListener('click', () => {
    console.log('Grand Parent clicked!');
}, true) //capturing

document.querySelector('#parent')
.addEventListener('click', (e) => {
    console.log('Parent clicked!');
    e.stopPropagation();
}, false) //bubbling

document.querySelector('#child')
.addEventListener('click', () => {
    console.log('Child clicked!');
}, false) //captring

//stop propagation will help to stop propagation
