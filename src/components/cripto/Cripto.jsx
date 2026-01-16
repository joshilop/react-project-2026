import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr}) => {
    return (
        <>
            
            <div className="cripto">
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                    <p><span className="label">Codigo: </span>{symbol}</p>
                    <p>
                        <span className="label">Cambio 24h: </span>
                        <span className={changePercent24Hr >= 0 ? "positivo" : "negativo"}>
                            {parseFloat(changePercent24Hr).toFixed(2)}%
                        </span>
                    </p>
                    <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
                </div>
            </div>
        </>
    )
}

export default Cripto