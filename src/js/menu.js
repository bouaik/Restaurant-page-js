const menu = (() => {
    const menu = document.createElement('div');
    menu.className = "menu"

    const menuTitle = document.createElement('h3')
    menuTitle.className = "menu-title"
    menuTitle.textContent = "Menu"

    const album = document.createElement('div')
    album.className = "album"

    const catrgories = document.createElement('div')
    catrgories.className = "container-categories"

    const pizzaLink = document.createElement('a')
    pizzaLink.setAttribute('href', '#')
    pizzaLink.setAttribute('data-filter', 'pizza')
    pizzaLink.className = "filter-btn"
    pizzaLink.textContent = 'Pizza'

    const burgerLink = document.createElement('a')
    burgerLink.setAttribute('href', '#')
    burgerLink.setAttribute('data-filter', 'burger')
    burgerLink.className = "filter-btn"
    burgerLink.textContent = 'Burger'

    const drinksLink = document.createElement('a')
    drinksLink.setAttribute('href', '#')
    drinksLink.setAttribute('data-filter', 'drinks')
    drinksLink.className = "filter-btn"
    drinksLink.textContent = 'Drinks'



    catrgories.appendChild(pizzaLink)
    catrgories.appendChild(burgerLink)
    catrgories.appendChild(drinksLink)


    album.appendChild(catrgories)




    menu.appendChild(menuTitle)
    menu.appendChild(album)
    return menu
})();
export default menu