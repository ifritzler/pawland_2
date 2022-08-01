import { getCartCopy, updateCarrito } from "../cart.js";

const pushToCart = (product) => {
  
  const carrito = getCartCopy()
  if(carrito.hasOwnProperty(product.id)){
    carrito[product.id].quantity =  Number(carrito[product.id].quantity) + 1
    carrito[product.id].total = carrito[product.id].quantity * carrito[product.id].price
  }else {
    const {img, title, price} = product
    carrito[product.id] = {
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