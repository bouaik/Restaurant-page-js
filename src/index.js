import './styles/main.scss'

import navbar from './js/navbar'
import home from './js/home'

const content = document.getElementById('content')

content.appendChild(navbar)
content.appendChild(home)

