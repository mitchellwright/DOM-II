// Resize main bus image when clicked
let heroImage = document.querySelectorAll('.intro > img');
heroImage[0].addEventListener('click', event => {
    if(event.target.style.width === '50%') {
        event.target.style.width = '100%';
    } else {
        event.target.style.width = '50%';
    }
});

// Change adventure text color when t is pressed
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

// Alert on copy of fun text to the clipboard
let funText = document.querySelector('.content-pick > .destination > p');
funText.addEventListener('copy', event => {
    alert('You have copied text from the website! Use it wisely.');
});

// Change footer background color on mousemove
let footer = document.querySelector('footer');
footer.addEventListener('mousemove', event => {
    footer.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Animnate map image on dblclick
let mapImage = document.querySelector('.img-content > img');
mapImage.addEventListener('dblclick', event => {
    gsap.to(mapImage, {duration: 3, rotation: 360});
});

// Shrink logo on mousedown
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', event => {
    gsap.to(logo, {duration: 3, scale: 0.5});
});

// Logo back to normal on mouseup
logo.addEventListener('mouseup', event => {
    gsap.to(logo, {duration: 3, scale: 1});
});

// Alert on canal image drag
let canalImage = document.querySelector('.inverse-content > div > img');
console.log(canalImage);
canalImage.addEventListener('contextmenu', event => {
    alert("Please don't copy our images");
});