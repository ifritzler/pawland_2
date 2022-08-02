import { getProductById } from "./services/products.js";
import { showToastNotification } from "./utils.js";

const updateCarrito = (data) => {
  const newData = { ...data };
  localStorage.setItem("cart", JSON.stringify(newData));
  cart = JSON.parse(localStorage.getItem("cart"));
};

const getCartCopy = () => {
  return { ...cart };
};

const pushToCart = (product) => {
  const carrito = getCartCopy();
  const { id, img, title, price } = product;
  if (carrito.hasOwnProperty(product.id)) {
    carrito[id].quantity = Number(carrito[id].quantity) + 1;
    carrito[id].total = carrito[id].quantity * carrito[id].price;
  } else {
    carrito[id] = {
      img,
      title,
      price,
      quantity: 1,
      total: price,
    };
  }
  updateCarrito(carrito);
};

const saveProductToCart = async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const product = await getProductById(id);
  pushToCart(product);
  showToastNotification(product, () => console.log("hello from toast"));
};

// Inicializamos el carrito, en caso de no existir lo seteo vacio y lo exporto para su uso
let cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify({}));
}
cart = JSON.parse(localStorage.getItem("cart"));

export { updateCarrito, getCartCopy, pushToCart, saveProductToCart };
