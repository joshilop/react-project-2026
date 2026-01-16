import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import "./Menu.css"
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const Menu = () => {

    const navigation = useNavigate()

    const {usuario} = useContext(UserContext)

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("token")
                    navigation("/login")
                }}>Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu