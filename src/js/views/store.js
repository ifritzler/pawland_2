import card from "../components/card.js";

import { getAllProducts, getProductById } from "../services/products.js";
import { pushToCart } from "../services/addItem.js";

// Componente que se encarga de renderizar las cards dentro de si y se devuelve para ser pintado
const cards = async () => {
  // Separacion de responsabilidad. El fetching lo realiza el servicio de getAllProducts()
  const data = await getAllProducts();
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add("cards");

  let tarjetas = "";
  data.forEach(product => tarjetas += card(product));
  cardsContainer.innerHTML = tarjetas;

  const btnsAgregar = cardsContainer.getElementsByClassName('btn-agregar')
  if(btnsAgregar){
    for(let i = 0; i < btnsAgregar.length; i++){
      btnsAgregar[i].addEventListener('click', async (e) => {
        e.preventDefault()
        const id = btnsAgregar[i].dataset.id
        console.log(id)
        const product = await getProductById(id)
        pushToCart(product)
      })
    }
  }
  return cardsContainer;
};

export default cards;
