import { createContext } from "react";

export const StoreContext = createContext();

const Context = ({children}) => {
    const url = "http://localhoste:8000"
    return ( 
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
     );
}
 
export default Context;