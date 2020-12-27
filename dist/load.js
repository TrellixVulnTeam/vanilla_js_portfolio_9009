const home = document.getElementById('home')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const links = document.querySelectorAll('.link')

const navigateHome = () => {
    home.style.display = 'grid'
    projects.style.display = 'none'
    contact.style.display = 'none'

    links[0].style.color = 'pink'
    links[1].style.color = 'white'
    links[2].style.color = 'white'
    // linkHome.classList.add('active')
    // linkProjects.classList.remove('active')
    // linkContact.classList.remove('active')
}

const navigateProjects = () => {
    home.style.display = 'none'
    projects.style.display = 'block'
    contact.style.display = 'none'

    links[0].style.color = 'white'
    links[1].style.color = 'pink'
    links[2].style.color = 'white'
    // linkHome.classList.remove('active')
    // linkProjects.classList.add('active')
    // linkContact.classList.remove('active')
}

const navigateContact = () => {
    home.style.display = 'none'
    projects.style.display = 'none'
    contact.style.display = 'block'

    links[0].style.color = 'white'
    links[1].style.color = 'white'
    links[2].style.color = 'pink'
}