// Inicializamos el carrito, en caso de no existir lo seteo vacio y lo exporto para su uso
let cart = localStorage.getItem('cart')
if(!cart){
  localStorage.setItem('cart', JSON.stringify({}))
}
cart = JSON.parse(localStorage.getItem('cart'))

const updateCarrito = (data) => {
  const newData = {...data}
  localStorage.setItem('cart', JSON.stringify(newData))
  cart = JSON.parse(localStorage.getItem('cart'))
}

const getCartCopy = () => {
  return {...cart}
}

export {
  updateCarrito,
  getCartCopy
} 
