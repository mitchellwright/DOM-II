// Resize main bus image when clicked
let heroImage = document.querySelectorAll('.intro > img');
heroImage[0].addEventListener('click', event => {
    if(event.target.style.width === '50%') {
        event.target.style.width = '100%';
    } else {
        event.target.style.width = '50%';
    }
});

// Change text when t is pressed
let adventureText = document.querySelectorAll('.inverse-content > .text-content');

document.addEventListener('keypress', event => {
    if(event.code === 'KeyT') {
        adventureText.forEach(el => el.style.color = 'red');
    }
});

// Animate destination image on mouseenter
let destinationImage = document.querySelectorAll('.content-destination > img');
destinationImage[0].addEventListener('mouseenter', () => {
    gsap.from(destinationImage[0], {duration: 2, x: 300, opacity: 0, scale: 0.5});
});

// Rotate nav on wheel scroll
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach( el => {
    el.addEventListener('wheel', event => {
        event.preventDefault();

        el.style.transform = 'skew(-20deg)';
    });
});