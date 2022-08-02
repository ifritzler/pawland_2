import { reduceTextDescription } from "../utils.js"

const cartRow = (cartItem) => {
  const {img, title, price, quantity, total} = cartItem
  const html = `
  <div class="carrito-row-data">
    <div class="product-img"><img src="${img}" alt=""></div>
    <div class="product-data">${reduceTextDescription(title, 20)}</div>
    <div class="product-data">$${price}</div>
    <div class="product-data">${quantity}</div>
    <div class="product-data">$${total}</div>
  </div>
  `
  return html
}

export default cartRow
