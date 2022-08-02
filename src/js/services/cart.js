import { getCartCopy, updateCarrito } from "../cart.js";

const pushToCart = (product) => {
  
  const carrito = getCartCopy()
  const {id, img, title, price} = product
  if(carrito.hasOwnProperty(product.id)){
    carrito[id].quantity =  Number(carrito[id].quantity) + 1
    carrito[id].total = carrito[id].quantity * carrito[id].price
  }else {
    carrito[id] = {
      img, title, price,
      quantity: 1,
      total: price
    }
  }
  updateCarrito(carrito)
}

export {
  pushToCart
}