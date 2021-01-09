const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const linkHome = document.getElementById('link-home')
const linkProjects = document.getElementById('link-projects')
const linkContact = document.getElementById('link-contact')
const faders = document.querySelectorAll('.fader')
const container = document.querySelectorAll('.container')
const menu = document.querySelector('.menu-toggler')
let darkMode = false

const navigateHome = () => {
    home.style.display = 'flex'
    projects.style.display = 'none'
    contact.style.display = 'none'

    container[0].scrollTop = 0;

    linkHome.classList.add('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.remove('active-link')

    menu.checked = false
}

const navigateProjects = () => {
    home.style.display = 'none'
    projects.style.display = 'flex'
    contact.style.display = 'none'

    container[1].scrollTop = 0;

    faders.forEach(fader => {
        fader.classList.remove('appear')
    })

    faders.forEach(fader => {
        observer.observe(fader)
    })

    linkHome.classList.remove('active-link')
    linkProjects.classList.add('active-link')
    linkContact.classList.remove('active-link')

    menu.checked = false
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'flex'

    container[2].scrollTop = 0;

    linkHome.classList.remove('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.add('active-link')

    menu.checked = false
}

const options = {
    threshold: 0.15
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
    el.addEventListener('mouseenter', () => {
        image.style.backgroundImage = `url(./assets/gifs/${newImg}.gif)`
        fullScreen.style.display = 'flex'
    })
    image.addEventListener('mouseleave', () => {
        fullScreen.style.display = 'none'
        // document.exitFullscreen()
    })
})

const closeFullScreen = document.querySelector('.close-fullscreen')

const closeScreen = () => {
    fullScreen.style.display = 'none'
    // document.exitFullscreen()
}

document.addEventListener('keyup', (e) => {
    if (e.key === "Escape" ) {
        fullScreen.style.display = 'none'
    }
})

const scrollToTop = () => {
    container[1].scrollTop = 0
}

const toggleDarkMode = () => {
    const logo = document.getElementById('logo')
    // const toggler = document.getElementById('darkmode-toggler')
    const tog = document.getElementById('tog')

    if (document.body.clientWidth <= 750) {
        const source = darkMode
        ? './assets/images/LogoDark1000px.png'
        : './assets/images/LogoLight1000px.png'
        logo.src = source
    } else {
        logo.src = './assets/images/LogoLight1000px.png'
    }

    // toggler.style.justifyContent = toggler.style.justifyContent === 'flex-end' 
    // ? 'flex-start' : 'flex-end'

    tog.style.marginLeft = tog.style.marginLeft !== 'calc(100% - 16px)' 
    ? 'calc(100% - 16px)' : '2px'

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
    ? './assets/images/LogoLight1000px.png'
    : './assets/images/LogoDark1000px.png'

    navigateProjects()

    document.getElementById('current-year').innerHTML = new Date().getFullYear()
}