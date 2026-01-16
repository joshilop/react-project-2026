import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">
                    Hola, bienvenido a <span className="brand">AkioMarket</span>
                </h1>
                <p className="home-subtitle">
                    Explora el ecosistema cripto y conoce las 100 monedas más usadas en tiempo real.
                </p>
                <Link className="home-button" to="/criptomonedas">
                    Ver criptomonedas
                </Link>
            </div>
        </div>
    )
}

export default Home