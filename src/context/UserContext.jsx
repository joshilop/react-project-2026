import { createContext, useState, useEffect } from "react";


const UserContext = createContext()

const UserContextProvider = ({ children })  => {

    const [ usuario, setUsuario ] = useState({});
        useEffect( () => {
            setUsuario({
                name: "Akio",
                registered: "22/06/2022"
            })
        }, []);
    
    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider}