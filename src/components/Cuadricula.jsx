import { useState } from "react" 
import { useEffect } from "react"
import axios from "axios"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto.jsx"
import usePetition from "./hooks/usePetition.js"
import Loader from "./Loader.jsx"

function Cuadricula() {

  /*
  const [criptos, setCriptos] = useState()     
  
  useEffect(() => {axios.get("https://rest.coincap.io/v3/assets", 
    { method: "GET",  headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" }})       
      .then((data) => setCriptos(data.data.data))       
      .catch((error) => console.log("La petición falló. Error: " + error))
    }, [])
  */

  // Desestructuramos el objeto que devuelve tu hook
  const { data: criptos, cargando } = usePetition("")

  // Si el hook dice que está cargando, mostramos el Spinner
  if (cargando) return <Loader />

  // Si no hay datos después de cargar
  if (!criptos) return <p>No se encontraron datos.</p>

  return (     
    <div className="app-container">      
      <h1 className="titulo">Lista de criptomonedas</h1>       
      <div className="cripto-container">         
        {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto 
            key={id} 
            name={name} 
            priceUsd={priceUsd} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr} 
            id={id}
          />
        ))}       
      </div>     
    </div>       
    ) 
  }

export default Cuadricula