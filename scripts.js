var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Web developer junior",
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
        
    }
)

// menu burger ////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Basculer entre le mode jour et le mode nuit
    body.classList.toggle('dark-mode');
});



function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }









