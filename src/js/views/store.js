import card from "../components/card.js";

import {
  getProductsByCategories,
} from "../services/products.js";
import { saveProductToCart } from "../cart.js";

// Componente que se encarga de renderizar las cards dentro de si y se devuelve para ser pintado
const cards = async (options) => {

  const {url} = options;
  const categories = url.searchParams.getAll("category");

  // Separacion de responsabilidad. El fetching lo realiza el servicio de getAllProducts()
  const data = await getProductsByCategories(categories);
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
