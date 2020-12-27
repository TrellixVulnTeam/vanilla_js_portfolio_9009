const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const links = document.querySelectorAll('.link')
const faders = document.querySelectorAll('.fader')

const navigateHome = () => {
    home.style.display = 'grid'
    projects.style.display = 'none'
    contact.style.display = 'none'

    links[0].style.color = 'pink'
    links[1].style.color = 'white'
    links[2].style.color = 'white'
}

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

    links[0].style.color = 'white'
    links[1].style.color = 'pink'
    links[2].style.color = 'white'
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'block'

    links[0].style.color = 'white'
    links[1].style.color = 'white'
    links[2].style.color = 'pink'
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