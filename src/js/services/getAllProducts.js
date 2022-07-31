// Servicio que ejecuta el fetching de todos los productos
const getAllProducts = async() => {
  try {
    const response = await fetch('/src/db.json')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error en el fetching de productos: ' + error.message)
    return []
  }
}

export default getAllProducts
