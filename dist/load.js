const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const linkHome = document.getElementById('link-home')
const linkProjects = document.getElementById('link-projects')
const linkContact = document.getElementById('link-contact')
const faders = document.querySelectorAll('.fader')
const description = document.querySelector('.description')
const menu = document.querySelector('.menu-toggler')
let darkMode = false

const navigateProjects = () => {
    home.style.display = 'none'
    projects.style.display = 'flex'
    contact.style.display = 'none'
    
    faders.forEach(fader => {
        fader.classList.remove('appear')
    })
    
    faders.forEach(fader => {
        observer.observe(fader)
    })
    
    linkHome.classList.remove('active-link')
    linkProjects.classList.add('active-link')
    linkContact.classList.remove('active-link')
    
    window.scrollTo(0,0)
    menu.checked = false
}

const navigateAbout = () => {
    home.style.display = 'flex'
    projects.style.display = 'none'
    contact.style.display = 'none'

    linkHome.classList.add('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.remove('active-link')

    window.scrollTo(0,0)
    menu.checked = false
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'flex'

    linkHome.classList.remove('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.add('active-link')

    window.scrollTo(0,0)
    menu.checked = false
}

const options = {
    threshold: 0.4
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)
        }
    })
}, options)

const hoverables = document.querySelectorAll('.fader')
const imageContainer = document.querySelectorAll('.image-container')
const fullScreen = document.querySelector('.fullscreen')
const image = document.querySelector('.image')

imageContainer.forEach((el, i) => {
    const newImg = imageContainer[i].id
    console.log(imageContainer[i])
    el.addEventListener('click', () => {
        image.style.backgroundImage = `url(./assets/gifs/${newImg}.gif)`
        fullScreen.style.display = 'flex'
    })
    image.addEventListener('mouseleave', () => {
        fullScreen.style.display = 'none'
    })
})

const closeFullScreen = document.querySelector('.close-fullscreen')

const closeScreen = () => {
    fullScreen.style.display = 'none'
}

document.addEventListener('keyup', (e) => {
    if (e.key === "Escape" ) {
        fullScreen.style.display = 'none'
    }
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const toggleDarkMode = () => {
    const logo = document.getElementById('logo')
    const toggler = document.getElementById('darkmode-toggler')

    if (document.body.clientWidth <= 750) {
        const source = darkMode
        ? './assets/graphics/LogoDark-500px.png'
        : './assets/graphics/LogoLight-500px.png'
        logo.src = source
    } else {
        logo.src = './assets/graphics/LogoLight-500px.png'
    }

    document.getElementById('scroll-to-top').src = darkMode ? './assets/graphics/scroll-to-top.png' : './assets/graphics/scroll-to-top-white.png'

    toggler.style.justifyContent = toggler.style.justifyContent !== 'flex-end' 
    ? 'flex-end' : 'flex-start'

    document.getElementById('body').classList.toggle('dark-mode')

    setTimeout(() => {
        menu.checked = false
    }, 400)

    darkMode = !darkMode
}

const setLogo = () => {
    const docWidth = document.body.clientWidth
    const logo = document.getElementById('logo')

    logo.src = docWidth > 750 
    ? './assets/graphics/LogoLight-500px.png'
    : './assets/graphics/LogoDark-500px.png'

    navigateProjects()

    document.getElementById('current-year').innerHTML = new Date().getFullYear()
}