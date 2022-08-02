// Importacion de vistas
import Home from "./views/home.js";
import notFound from "./views/404.js";
import cards from "./views/store.js";
import cartView from "./views/cart.js";

// Importamos el carrito inicializado
// Funcion que facilita y evita repeticion de querySelectors y funciones getElement
const $ = (selector) => {
  const el = document.querySelectorAll(selector);
  if (el.length === 1) {
    return el[0];
  }
  return el;
};

// Selecciono mi contenedor donde se va a renderizar dinamicamente mi spa
const app = $("#app");

// Lista de rutas y vistas que traen
const routes = {
  home: Home,
  tienda: cards,
  carrito: cartView
};

// Funcion que recibe una vista y hace un update del contenido en el contenedor principal
// de mi spa
const renderApp = async (view) => {
  app.innerHTML = "";
  app.appendChild(await view());
};

// Manejador de rutas, obtiene el hash de la pagina y renderiza la ruta correspondiente
const routeHandler = async (e) => {
  e.preventDefault();
  const hash = window.location.hash.split("?")[0].split("#/")[1];
  if (!hash) return renderApp(Home);

  const route = routes[hash];
  if (!route) return renderApp(notFound);

  return await renderApp(route);
};

// Event Listeners
// Al cargarse por completo el documento ejecuto el manejador de rutas para renderizar el contenido de la homepage
window.addEventListener("DOMContentLoaded", (e) => routeHandler(e));
// Al cambiar el hash ejecuto el manejador de rutas para el update de contenido
window.addEventListener("hashchange", (e) => routeHandler(e));
