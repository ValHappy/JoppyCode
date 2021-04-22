import React,{createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState(false);
    const [habilidad,setHabilidad] = useState("");
    const [dificultad,setDificultad] = useState("");
    const [infoExcerse,setInfoExcerse] = useState({});
    return (            
            <MenuContext.Provider value={[state,setState,habilidad,setHabilidad, dificultad, setDificultad, infoExcerse, setInfoExcerse]}>
                {children}
            </MenuContext.Provider>  
    );
}

export const MenuContext = createContext();