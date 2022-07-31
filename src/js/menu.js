const menuButton = document.getElementById("menu-toggle");
const wrapperMenu = document.getElementById("wrapper-menu-toggle");
const menu = document.getElementsByClassName("mobile-menu")[0];
const closeMenuButton = document.getElementById("close-btn");

// Intercambia las clases que cierran y abren el menu desplegable en dispositivos mobile
function openCloseMenu(event) {
  event.stopPropagation();
  menu.classList.toggle("animate");
  wrapperMenu.classList.toggle("hidden");
}
wrapperMenu.addEventListener("click", openCloseMenu);
closeMenuButton.addEventListener("click", openCloseMenu);
menuButton.addEventListener("click", openCloseMenu);

// Evita que al tocar en el menu donde no hay botones se salga del menu. Ya que
// wrapperMenu al hacerle click cierra el menu como cuando se presiona el btn de cerrar.
menu.addEventListener("click", (event) => event.stopPropagation());
