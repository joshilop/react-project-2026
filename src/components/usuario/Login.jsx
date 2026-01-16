import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {

    const navigation = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const submit = (e) => {
        e.preventDefault(); // 1. Detenemos la recarga

        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '<project_api_key>',
                'x-reqres-env': 'prod'
            },
            body: JSON.stringify({
                email: user.email,     // 2. Usamos los datos del estado
                password: user.password
            })
        }) // <--- Aquí cerramos el paréntesis del fetch
        .then(response => response.json()) // 3. Convertimos a JSON
        .then(data => {
            if (data.token) {
                localStorage.setItem("token", data.token); // 4. Comillas en "token"
                navigation('/perfil'); // 5. ¡Ahora sí navegará!
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(e => console.error("Error:", e));
    }

    if (localStorage.getItem("token")) return <Navigate to="/" />

    return (
        <>
            <div className="login-container">
                <h1>Iniciar sesión</h1>
                <form onSubmit={submit}>
                    <div className="field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} type="email" name="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} type="password" name="password" />
                    </div>
                    <div className="submit">
                        <input type="submit" value="Ingresar" />
                    </div>
                </form>
            </div>
            
        </>
        
    )
}

export default Login