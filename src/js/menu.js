/* eslint-disable no-unused-vars */
const menuButton = document.getElementById('menu-toggle')
const wrapperMenu = document.getElementById('wrapper-menu-toggle')
const menu = document.getElementsByClassName('mobile-menu')[0]
const closeMenuButton = document.getElementById('close-btn')

function closeMenu (event) {
  event.stopPropagation()
  menu.classList.toggle('animate')
  wrapperMenu.classList.toggle('hidden')
}

menu.addEventListener('click', event => {
  event.stopPropagation()
})

wrapperMenu.addEventListener('click', closeMenu)
closeMenuButton.addEventListener('click', closeMenu)

menuButton.addEventListener('click', event => {
  wrapperMenu.classList.toggle('hidden')
  menu.classList.toggle('animate')
})
