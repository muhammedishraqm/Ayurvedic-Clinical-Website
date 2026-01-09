/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== FORM HANDLING ===============*/
const bookingForm = document.getElementById('booking-form')
if(bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(bookingForm)
        const data = Object.fromEntries(formData.entries())
        
        try {
            const response = await fetch('/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if(result.status === 'success') {
                alert(result.message)
                bookingForm.reset()
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Something went wrong. Please try again.')
        }
    })
}

const contactForm = document.getElementById('contact-form')
if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(contactForm)
        const data = Object.fromEntries(formData.entries())
        
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if(result.status === 'success') {
                alert(result.message)
                contactForm.reset()
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Something went wrong. Please try again.')
        }
    })
}
