import './styles/main.scss'

import navbar from './js/navbar'
import home from './js/home'
import menu from './js/menu'
import contact from './js/contact'

const content = document.getElementById('content')

content.appendChild(navbar)
content.appendChild(contact)



const links = document.querySelectorAll('.nav-link');

links.forEach(link => link.addEventListener('click', (e) => {
    let tab = e.target.textContent

    if (tab === "Menu") {
        content.innerHTML = ''
        content.appendChild(navbar)
        content.appendChild(menu)
        filterItems()
    } else if (tab === "Home") {
        content.innerHTML = ''
        content.appendChild(navbar)
        content.appendChild(home)
    } else if (tab === "Contact") {
        content.innerHTML = ''
        content.appendChild(navbar)
        content.appendChild(contact)
    }
}))

const filterItems = () => {
    const filterBtn = document.querySelectorAll(".filter-btn");

    filterBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        const value = e.target.dataset.filter;

        const items = document.querySelectorAll(".menu-item ");

        items.forEach((item) => {
            if (value === "all") {
            item.style.display = "block";
            } else {
            if (item.classList.contains(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
            }
        });
        });
    });
}