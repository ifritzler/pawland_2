import card from "../components/card.js";

import { getAllProducts, getProductById } from "../services/products.js";
import { pushToCart } from "../services/addItem.js";
import { showToastNotification } from "../utils.js";

const saveProductToCart = async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const product = await getProductById(id);
  pushToCart(product);
  showToastNotification(product, () => console.log("hello from toast"));
};

// Componente que se encarga de renderizar las cards dentro de si y se devuelve para ser pintado
const cards = async (filters = null) => {
  // Separacion de responsabilidad. El fetching lo realiza el servicio de getAllProducts()
  const data = await getAllProducts();
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("cards");

  let tarjetas = "";
  data.forEach((product) => (tarjetas += card(product)));
  cardsContainer.innerHTML = tarjetas;

  const btnsAgregar = cardsContainer.getElementsByClassName("btn-agregar");

  Array.from(btnsAgregar).forEach((btn) => {
    btn.addEventListener("click", saveProductToCart);
  });

  return cardsContainer;
};

export default cards;
