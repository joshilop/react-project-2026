import { useState } from "react" 
import { useEffect } from "react"
import axios from "axios"
import "./App.css"

function Criptomonedas({id, name, priceUsd}) {

  return (
    <ul class="contenedor">
      <li key = {id}> 
        <div class="card">
          <h3>{name}</h3>
          <p>{priceUsd}</p>
        </div>
      </li>
    </ul>
  )
}

function App() {

  const [criptos, setCriptos] = useState()     
  
  useEffect(() => {axios.get("https://rest.coincap.io/v3/assets", 
    { method: "GET",  headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" }})       
      .then((data) => setCriptos(data.data.data))       
      .catch((error) => console.log("La petición falló. Error: " + error))
    }, [])

  if (!criptos) return <span>Cargando...</span>

  return (     
    <>       
      <h1 className="titulo">Lista de criptomonedas</h1>       
      <ol>         
        {criptos.map((cripto) => (
          <Criptomonedas key={cripto.id} name={cripto.name} priceUsd={cripto.priceUsd} />
        ))}       
      </ol>     
    </>       
    ) 
  }

export default App