import { pushToCart } from "../services/addItem.js"

const card = (product) => {
  const html = `
  <li class="card">
  <div class="card__img">
    <img src="${product.img}" alt="Default product Image">
    </div>
    <h3 class="card__title">${String(product.title).slice(0, 20)}</h3>
    <p class="card__description">
      ${String(product.description).slice(0, 43)}
    </p>
    <span class="card__price">$${product.price}</span>
    <button class="btn--dark btn-agregar" data-id="${product.id}">Agregar</button>
  </li>
  `
  return html
}

export default card
