import card from "../components/card.js";
import getAllProducts from "../services/getAllProducts.js";

// Componente que se encarga de renderizar las cards dentro de si y se devuelve para ser pintado
const cards = async () => {
  // Separacion de responsabilidad. El fetching lo realiza el servicio de getAllProducts()
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
