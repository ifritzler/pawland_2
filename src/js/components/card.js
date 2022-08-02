import { reduceTextDescription } from "../utils.js";

const card = (product) => {
  const { img, title, description, price, id } = product;

  return `
    <li class="card">
    <div class="card__img">
      <img src="${img}" alt="Default product Image">
      </div>
      <h3 class="card__title">${reduceTextDescription(title, 20)}</h3>
      <p class="card__description">
        ${reduceTextDescription(description, 43)}
      </p>
      <span class="card__price">$${price}</span>
      <button class="btn--dark btn-agregar" data-id="${id}">Agregar</button>
    </li>
  `;
};

export default card;
