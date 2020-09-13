const menu = (() => {
    const menuData = [
        {
            imageUrl: 'https://img.cuisineaz.com/660x660/2013-12-20/i95731-pizza-royale.jpg',
            name: "Pizza margaritta",
            price: "10$"
        },
        {
            imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            name: "Pizza margaritta",
            price: "20$"
        },
        {
            imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            name: "Pizza margaritta",
            price: "20$"
        },
        {
            imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            name: "Pizza margaritta",
            price: "20$"
        },
        {
            imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            name: "Pizza margaritta",
            price: "20$"
        }
    ]


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


    const menuItems = document.createElement('div');
    menuItems.className = "menu-items"

    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = "menu-item"
    
        const img = document.createElement('img');
        img.setAttribute('src', item.imageUrl)
    
        const nameItem = document.createElement('h4');
        nameItem.textContent = item.name
    
        const priceItem = document.createElement('span');
        priceItem.textContent = item.price
    
        menuItem.appendChild(img)
        menuItem.appendChild(nameItem)
        menuItem.appendChild(priceItem)
    
    
        menuItems.appendChild(menuItem)
    })
    

    album.appendChild(catrgories)
    album.appendChild(menuItems)


    menu.appendChild(menuTitle)
    menu.appendChild(album)
    return menu
})();
export default menu