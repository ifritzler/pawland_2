const html = `
<div class="404">
  <h1>404. La ruta que acaba de visitar no existe.</h1>
</div>
`;
// Vista 404 ante una ruta desconocida
const notFound = () => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.innerHTML = html;
  fragment.appendChild(div);
  return fragment;
};

export default notFound;
