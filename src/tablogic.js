const nav = document.querySelector('nav')

const homeButton = document.createElement('button')
homeButton.textContent = 'Home'

const menuButton = document.createElement('button')
menuButton.textContent = 'Menu'

const contactButton = document.createElement('button')
contactButton.textContent = 'Contact'

nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(contactButton);

export {homeButton, menuButton, contactButton};