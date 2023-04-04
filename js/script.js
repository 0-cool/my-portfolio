let color = document.getElementById('favcolor');
color.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--main-color', e.target.value);
    document.documentElement.style.setProperty('--w-mode-main-color', e.target.value);
});

let changeMode = document.querySelector('.switch input');
let bodyWhiteMode = document.querySelector('body');
changeMode.onchange = () =>{
    changeMode.checked ? bodyWhiteMode.classList.add('white-mode') : bodyWhiteMode.classList.remove('white-mode');
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header_navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

 const typed = new Typed('.multiple-text',{
    strings: ['Senior Frontend Developer', 'Senior Shopify Developer FE', 'Senior JavaScript Developer', 'ReactJs Developer', 'VueJS Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
 const typedAbout = new Typed('.multiple-text-about',{
    strings: ['Senior Frontend Developer', 'Senior Shopify Developer FE', 'Senior JavaScript Developer', 'ReactJs Developer', 'VueJS Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
 
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home_img, .services_container, .portfolio_container_box', { origin: 'bottom' });
