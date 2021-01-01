const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); //stop bubling
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
}));
//capture: true => one,two,three   capture: false => three,two,one (bubling)
// if capture doesnt exist means capture:false

button.addEventListener('click', () => {
    console.log('Click!');
}, {
    once: false
});