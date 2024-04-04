// Header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer','UI/UX Designer'],
    typedSpeed:100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
    
})


// Active Links State On Scroll

// Get All Links

let navlLinks = document.querySelector('nav ul li a')

//Get All Sections
let section = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight )){
            navlLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                link.classList.add('active')
            }
        });
    }
    });
});