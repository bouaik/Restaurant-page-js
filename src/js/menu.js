const menu = (() => {
    const menuData = [
        {
            imageUrl: 'https://img.cuisineaz.com/660x660/2013-12-20/i95731-pizza-royale.jpg',
            name: "Pizza margaritta",
            price: "10$",
            dataItem: 'pizzas'
        },
        {
            imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
            name: "Pizza margaritta",
            price: "20$",
            dataItem: 'pizzas'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
            name: "Hamburger",
            price: "25$",
            dataItem: 'burgers'
        },
        {
            imageUrl: 'https://bigseventravel.com/wp-content/uploads/2019/07/beabout.jpg',
            name: "Hamburger",
            price: "20$",
            dataItem: 'burgers'
        },
        {
            imageUrl: 'https://la-mesa.com/wp-content/uploads/2016/10/la-mesa-mexican-restaurant-margarita-with-chips.jpg',
            name: "Coctaile",
            price: "20$",
            dataItem: 'drinks'
        },
        {
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/ce/3d/holiday-restaurant-in.jpg',
            name: "juice",
            price: "20$",
            dataItem: 'drinks'
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

    const allLink = document.createElement('a')
    allLink.setAttribute('href', '#')
    allLink.setAttribute('data-filter', 'all')
    allLink.className = "filter-btn"
    allLink.textContent = 'all'

    const pizzaLink = document.createElement('a')
    pizzaLink.setAttribute('href', '#')
    pizzaLink.setAttribute('data-filter', 'pizzas')
    pizzaLink.className = "filter-btn"
    pizzaLink.textContent = 'Pizzas'

    const burgerLink = document.createElement('a')
    burgerLink.setAttribute('href', '#')
    burgerLink.setAttribute('data-filter', 'burgers')
    burgerLink.className = "filter-btn"
    burgerLink.textContent = 'Burgers'

    const drinksLink = document.createElement('a')
    drinksLink.setAttribute('href', '#')
    drinksLink.setAttribute('data-filter', 'drinks')
    drinksLink.className = "filter-btn"
    drinksLink.textContent = 'Drinks'

    catrgories.appendChild(allLink)
    catrgories.appendChild(pizzaLink)
    catrgories.appendChild(burgerLink)
    catrgories.appendChild(drinksLink)


    const menuItems = document.createElement('div');
    menuItems.className = "menu-items"

    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = "menu-item"
        menuItem.classList.add(item.dataItem)
        menuItem.setAttribute('data-item', item.dataItem)

        const imgContainer = document.createElement('div');
        imgContainer.className = "img-container"
    
        const img = document.createElement('img');
        img.setAttribute('src', item.imageUrl)
    
        const nameItem = document.createElement('h4');
        nameItem.textContent = item.name
    
        const priceItem = document.createElement('span');
        priceItem.textContent = item.price

        imgContainer.appendChild(img)
    
        menuItem.appendChild(imgContainer)
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