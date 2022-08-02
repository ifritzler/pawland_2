import { routeHandler } from "../main.js";

const html = `
  <div class="hero__info container">
    <h2 class="hero__title">
      Pawland te ofrece todo lo que necesitas para tu mascota.
    </h2>
    <p class="hero__description">
      Empresa lider en venta de articulos para mascotas, con vasta experiencia
      en el mercado y ofreciendo siempre la mejor calidad.
    </p>
    <a href="?#/tienda" class="link btn--primary hero__btn"
      >Ingresa a nuestra tienda</a
    >
  </div>
  <div class="hero__image">
    <img
      src="./src/assets/portrait-dog.jpg"
      alt="Perro de pelaje rubio sonriendo"
    />
  </div>
`;
// Vista de la home page
const home = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  hero.innerHTML = html;
  hero.querySelector('a').addEventListener('click', e => routeHandler(e))
  return hero;
};

export default home;
