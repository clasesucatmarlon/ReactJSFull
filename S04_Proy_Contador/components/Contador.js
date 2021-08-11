const Contador = () => {
  const [numero, setNumero] = React.useState(0);

  // setInterval(() => {
  //   setNumero(numero + 1)
  // }, 2000);

  const Aumentar = () => {
    setNumero(numero + 1)
  }

  const Disminuir = () => {
    setNumero(numero - 1)
  }

  return (
    <div className="container pt-5">
      <h1>Proyecto Contador</h1>
      <hr /> 
      <br />
      <h5 className={numero >= 0 ? "mayorCero" : "menorCero"}>Contador: {numero} </h5>

      <div className="d-flex mt-3">
        <a 
          href="#" 
          onClick={Aumentar}
          className="btn btn-primary m-2 ">
            <i className="bi bi-caret-up-fill"></i>
        </a>
        <a 
          href="#" 
          onClick={Disminuir} 
          className="btn btn-primary m-2">
            <i className="bi bi-caret-down-fill"></i>
        </a>

      </div>
    </div>
  )
}