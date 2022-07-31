import card from "../components/card.js";
import getAllProducts from "../services/getAllProducts.js";

const cards = async () => {

  const data = await getAllProducts();
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("cards");

  let tarjetas = "";
  data.forEach((product) => {
    tarjetas += card(product);
  });

  cardsContainer.innerHTML = tarjetas;
  return cardsContainer;
};

export default cards;
