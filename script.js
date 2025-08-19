document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoViev({
                befavior: 'smoth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
});

const observerOpstions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver(function(entries){
    entries.forEach (entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, observerOpstions)

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
})

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if(!name || !email || !subject || !message){
        alert("Please fill in all fields.")
        return;
    }

    alert('Thank you for you message! I\'ll get back to you soon.');
    this.reset();
})

function typewriter (element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type(); 
}

window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-text h1');
    if(heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typewriter(heroTitle, originalText, 150)
        }, 1000);
    }
})

window.addEventListener('scroll', function(){
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if(hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)'
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0px) scale(1)'
    });
})

