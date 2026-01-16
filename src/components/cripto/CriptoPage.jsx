import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../hooks/usePetition.js"
import CriptoInfo from "./info/CriptoInfo.jsx"
import CriptoHistorial from "./info/CriptoHistorial.jsx"
import Loader from "../Loader.jsx"

const CriptoPage = () => {

    const params = useParams()
    
    /*
    const [cripto, setCripto] = useState()
    useEffect(() => {
        axios.get(`https://rest.coincap.io/v3/assets/${params.id}`,
            { method: "GET",  headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" }}
        ).then((data) => setCripto(data.data.data))
        .catch((error) => console.log("La petición falló. Error: " + error))
    }, [params.id])
    */
    /*
    const [history, setHistory] = useState()
    useEffect(() => {
        axios.get(`https://rest.coincap.io/v3/assets/${params.id}/history?interval=d1`,
            { method: "GET",  headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" }}
        ).then((data) => setHistory(data.data.data))
        .catch((error) => console.log("La petición falló. Error: " + error))
    }, [params.id])
    */
   
    const {data:cripto, cargando} = usePetition(params.id)
    const {data:history, cargandoHistory} = usePetition(`${params.id}/history?interval=d1`)
    
    if (cargando || cargandoHistory) return <Loader />

    if (!cripto) return <p>No se encontraron datos de la criptomoneda.</p>

    return (
    <div className="cripto-page-container">
        {/* Columna Izquierda: Título e Información */}
        {cripto && <CriptoInfo  cripto={cripto}/>}

        {/* Columna Derecha: Tabla Grande */}
        <aside className="history-section">
        <h2>Historial de Precios</h2>
        {history && <CriptoHistorial history={history} />}
        </aside>
    </div>
    );
}

export default CriptoPage