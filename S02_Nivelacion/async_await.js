// const saludo = async () => {
//   return 'Hola Marlon'
// }


// saludo()
//   .then(response => console.log(response))

const peticion =  async () => {
  setTimeout( () => {
    const datos = {
      'id': 3,
      'name': ' Marlon',
      'Apellido': 'García'
    }
    console.log(datos)
  }, 2000)
}

peticion();