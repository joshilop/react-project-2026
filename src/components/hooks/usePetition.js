import { useState, useEffect } from "react";
import axios from "axios";

const usePetition = (endpoint) => {

const [cargando, setCargando] = useState(false); // Estado para el loader

const [data, setData] = useState()

    useEffect(() => {
        setCargando(true); // Empezamos a cargar
        axios.get(`https://rest.coincap.io/v3/assets/${endpoint}`,
            { method: "GET",  headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" }}
        ).then((data) => setData(data.data.data))
        .finally(() => setCargando(false)) // Terminamos de cargar
        .catch((error) => console.log("La petición falló. Error: " + error))
    }, [endpoint])

    return { data, cargando };
}

export default usePetition;