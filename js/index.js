// Resize main bus image when clicked
let heroImage = document.querySelectorAll('.intro > img');
heroImage[0].addEventListener('click', event => {
    if(event.target.style.width === '50%') {
        event.target.style.width = '100%';
    } else {
        event.target.style.width = '50%';
    }
});

