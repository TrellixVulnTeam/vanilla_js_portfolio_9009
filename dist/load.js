const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const linkHome = document.getElementById('link-home')
const linkProjects = document.getElementById('link-projects')
const linkContact = document.getElementById('link-contact')
const faders = document.querySelectorAll('.fader')

const navigateHome = () => {
    home.style.display = 'grid'
    projects.style.display = 'none'
    contact.style.display = 'none'

    linkHome.classList.add('active-link')
    linkProjects.classList.remove('active-link')
    linkContact.classList.remove('active-link')

    document.getElementsByClassName('toggler')[0].checked = false
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

    linkHome.classList.remove('active-link')
    linkProjects.classList.add('active-link')
    linkContact.classList.remove('active-link')

    document.getElementsByClassName('toggler')[0].checked = false
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'block'

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

const hoverables = document.querySelectorAll('.image-container')

hoverables.forEach(el => {
    const newImg = el.id
    console.log(newImg)
    el.addEventListener('mouseenter', () => {
        el.style.backgroundImage = `url(./assets/gifs/${newImg}.gif)`
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundImage = `url(./assets/${newImg}.png)`
    })
})
// hoverable.addEventListener('mouseenter', () => {
//     hoverable.src = 'https://media.giphy.com/media/ghxFfvf3ggNbO/giphy.gif'
// })

// hoverable.addEventListener('mouseleave', () => {
//     hoverable.src = './assets/giphy.gif'
// })