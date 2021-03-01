import React,{createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState(false);
    return (            
            <MenuContext.Provider value={[state,setState]}>
                {children}
            </MenuContext.Provider>  
    );
}

export const MenuContext = createContext();