import Home from './views/home.js'
import notFound from './views/404.js'
import cards from './views/store.js'

const $ = (selector) => {
  const el = document.querySelectorAll(selector)
  if (el.length === 1) {
    return el[0]
  }
  return el
}

const routes = {
  home: Home,
  tienda: cards
}

const app = $('#app')

const renderApp = async (view) => {
  app.innerHTML = ''
  app.appendChild(await view())
}

const routeHandler = async (e) => {
  e.preventDefault()
  const hash = window.location.hash.split('?')[0].split('#/')[1]
  if (!hash) return renderApp(Home)

  const route = routes[hash]
  if (!route) return renderApp(notFound)

  return await renderApp(route)
}

// Event Listeners
window.addEventListener('hashchange', (e) => routeHandler(e))
window.addEventListener('DOMContentLoaded', (e) => routeHandler(e))
