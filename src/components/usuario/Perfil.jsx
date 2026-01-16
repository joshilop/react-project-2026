import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./Perfil.css"

const Perfil = () => {

    /*
    const [ usuario, setUsuario ] = useState({});
        useEffect( () => {
            setUsuario({
                name: "Jaaa",
                registered: "22/06/2022"
            })
        }, []);
    */

    const {usuario} = useContext(UserContext);

    return (
        <div className="perfil-container">
            <div className="perfil-card">
                <h1>Perfil de {usuario.name}</h1>
                <p><span>Usuario desde:</span> {usuario.registered}</p>
            </div>
        </div>
    )
}

export default Perfil