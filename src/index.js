import './styles/main.scss'

import navbar from './js/navbar'
import home from './js/home'
import menu from './js/menu'

const content = document.getElementById('content')

content.appendChild(navbar)
content.appendChild(home)


const links = document.querySelectorAll('.nav-link');

links.forEach(link => link.addEventListener('click', (e) => {
    let tab = e.target.textContent

    if (tab === "Menu") {
        content.removeChild(home)
        content.appendChild(menu)
    } else if (tab === "Home") {
        content.appendChild(home)
        content.removeChild(menu)
    } else if (tab === "Contact") {
        
    }
}))
