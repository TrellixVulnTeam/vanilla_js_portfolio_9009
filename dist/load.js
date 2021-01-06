const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const linkHome = document.getElementById('link-home')
const linkProjects = document.getElementById('link-projects')
const linkContact = document.getElementById('link-contact')
const faders = document.querySelectorAll('.fader')
const container = document.querySelectorAll('.container')

const navigateHome = () => {
    home.style.display = 'flex'
    projects.style.display = 'none'
    contact.style.display = 'none'

    container[0].scrollTop = 0;

    linkHome.classList.add('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.remove('active-link')

    document.getElementsByClassName('toggler')[0].checked = false
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

    document.getElementsByClassName('toggler')[0].checked = false
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'flex'

    container[2].scrollTop = 0;

    linkHome.classList.remove('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.add('active-link')

    document.getElementsByClassName('toggler')[0].checked = false
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
        // fullScreen.requestFullscreen()
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
    document.getElementById('body').classList.toggle('dark-mode')
}

const closeDescription = () => {
    const desc = document.querySelectorAll('.description')[0]
    desc.style.whiteSpace = 'no-wrap'
    desc.style.overflow = 'hidden'
    desc.style.height = '30px'
}