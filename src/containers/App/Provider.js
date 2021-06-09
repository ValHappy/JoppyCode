import React,{createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState(false);
    const [habilidad,setHabilidad] = useState("");
    const [dificultad,setDificultad] = useState("");
    const [infoExcerse,setInfoExcerse] = useState({});
    const [isLogged, setIsLogged] = useState({name: '', isLogged: false});
    return (            
            <MenuContext.Provider value={[state,setState,habilidad,setHabilidad, dificultad, setDificultad, infoExcerse, setInfoExcerse, isLogged, setIsLogged]}>
                {children}
            </MenuContext.Provider>  
    );
}

export const MenuContext = createContext();