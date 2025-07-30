let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = navbar.querySelectorAll('a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
})

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');



 window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href"=' + id + ']').classList.add('active')
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)    


 }