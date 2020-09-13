const navbar = (() => {
    const nav = document.createElement('nav')
    
    const logo = document.createElement('h2')
    logo.className = 'logo'
    logo.textContent = 'Memoza restaurant'

    const list = document.createElement('ul')
    list.className = "list"

    const home = document.createElement('li')
    home.className = "nav-item"
    const menu = document.createElement('li')
    menu.className = "nav-item"
    const contact = document.createElement('li')
    contact.className = "nav-item"

    const homeLink = document.createElement('a')
    homeLink.className = "nav-link"
    homeLink.setAttribute('href', "#")
    homeLink.textContent = "Home"

    const menuLink = document.createElement('a')
    menuLink.className = "nav-link"
    menuLink.setAttribute('href', "#")
    menuLink.textContent = "Menu"
    
    const contactLink = document.createElement('a')
    contactLink.className = "nav-link"
    contactLink.setAttribute('href', "#")
    contactLink.textContent = "Contact"

    home.appendChild(homeLink)
    menu.appendChild(menuLink)
    contact.appendChild(contactLink)

    list.appendChild(home)
    list.appendChild(menu)
    list.appendChild(contact)

    nav.appendChild(logo)
    nav.appendChild(list)

    return nav 
})();

export default navbar;