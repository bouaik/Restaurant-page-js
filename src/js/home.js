const home = (() => {
    const home = document.createElement('div')
    home.className = "home"


    const homeTitle = document.createElement('h3')
    homeTitle.className = "home-title"
    homeTitle.textContent = "welcome to memoza restautant"

    const homeParagraph = document.createElement('p')
    homeParagraph.className = 'home-paragraph'
    homeParagraph.textContent = 'join us for your next meal. we get the juices flowing'

    const orderLink = document.createElement('a')
    orderLink.setAttribute('href', '#')
    orderLink.className = "order-link"
    orderLink.textContent = "order now"


    home.appendChild(homeTitle)
    home.appendChild(homeParagraph)
    home.appendChild(orderLink)
    return home
})();

export default home