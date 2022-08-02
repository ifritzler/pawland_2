import cartRow from "../components/cartRow.js";
import { getCartCopy } from "../cart.js";

const cartView = () => {
  const carrito = getCartCopy();
  let htmlItems = "";
  Object.values(carrito).forEach((item) => (htmlItems += cartRow(item)));
  const cartElement = document.createElement('div')
  cartElement.classList.add('carrito')

  const html = `
      <div class="carrito-headings">
        <div class="carrito-heading">Imagen Producto</div>
        <div class="carrito-heading">Nombre</div>
        <div class="carrito-heading">Precio Unitario</div>
        <div class="carrito-heading">Cantidad</div>
        <div class="carrito-heading">Total</div>
      </div>
      <div class="carrito-body">
        ${htmlItems}
      </div>
`;
  cartElement.innerHTML = html
  return cartElement
};

export default cartView