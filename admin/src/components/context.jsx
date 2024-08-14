import { createContext } from "react";

export const StoreContext = createContext();

const Context = ({ children }) => {
    const url = "http://localhost:8000"; 

    return (
        <StoreContext.Provider value={{ url }}>
            {children}
        </StoreContext.Provider>
    );
}

export default Context;
