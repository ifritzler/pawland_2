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
wrapperMenu.addEventListener('click', closeMenu)
closeMenuButton.addEventListener('click', closeMenu)

menu.addEventListener('click', (event) => {
  // Evita que al tocar en el menu donde no hay botones se salga del menu. Ya que
  // wrapperMenu al hacerle click cierra el menu como cuando se presiona el btn de cerrar.
  event.stopPropagation()
})

menuButton.addEventListener('click', (event) => {
  wrapperMenu.classList.toggle('hidden')
  menu.classList.toggle('animate')
})
