// Importacion de vistas
import Home from "./views/home.js";
import notFound from "./views/404.js";
import cards from "./views/store.js";
import cartView from "./views/cart.js";

const links = document.getElementsByClassName("link");
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
  carrito: cartView,
};

// Funcion que recibe una vista y hace un update del contenido en el contenedor principal
// de mi spa
const renderApp = async (view, options = {}) => {
  app.innerHTML = "";
  app.appendChild(await view(options));
};

// Manejador de rutas, obtiene el hash de la pagina y renderiza la ruta correspondiente
// Seguro hay alguna forma mejor. Y aunque hay soluciones a esto, con vanilla js no encontre solucion alguna por el momento
// Refactorizar esta porcion de codigo cuando sea necesario.
// Al dia de hoy es funcional
const routeHandler = async (e) => {
  e.preventDefault();
  let link = e.target;
  const localName = e.target.localName;
  switch (localName) {
    case "div":
      link = e.target.firstChild;
      break;
    case "path":
      link = e.target.parentElement.parentElement;
      break;
    case "a":
      break;
    default:
      link = e.target.parentElement;
  }

  if (!link) {
    return await renderApp(Home);
  }

  const url = new URL(link.href);
  const hash = url.hash.split("/")[1];

  if (!hash) return await renderApp(Home);
  const route = routes[hash];
  if (!route) return await renderApp(notFound);

  return await renderApp(route, { url });
};

// Event Listeners
// Al cargarse por completo el documento ejecuto el manejador de rutas para renderizar el contenido de la homepage
const loadEventListeners = async () => {
  window.addEventListener(
    "DOMContentLoaded",
    async (e) => await routeHandler(e)
  );
  // Al cambiar el hash ejecuto el manejador de rutas para el update de contenido
  window.addEventListener("hashchange", async (e) => await routeHandler(e));

  // Este evento captura los link
  Array.from(links).forEach((l) => {
    l.addEventListener("click", async (e) => await routeHandler(e));
  });
};
loadEventListeners();

export {routeHandler}