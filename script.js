
let menuIcon = documet.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//scrolling 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icons
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
    
}