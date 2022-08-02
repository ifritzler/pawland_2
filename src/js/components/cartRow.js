import { reduceTextDescription } from "../utils.js";

const cartRow = (id, cartItem) => {
  const { img, title, price, quantity, total } = cartItem;
  const html = `
  <div class="carrito-row-data">
    <div class="product-img"><img src="${img}" alt=""></div>
    <div class="product-data">${reduceTextDescription(title, 20)}</div>
    <div class="product-data">$${price}</div>
    <div class="product-data">
      ${quantity}
      <button class="button-quantity--blue" data-id="${id}">-</button>
      <button class="button-quantity--blue" data-id="${id}">+</button>
    </div>
    <div class="product-data">$${total}</div>
    <div class="product-data">
      <button class="button-quantity--red" data-id="${id}">Eliminar</button>
    </div>
  </div>
  `;
  return html;
};

export default cartRow;
