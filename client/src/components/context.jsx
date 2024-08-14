import { createContext } from "react";

export const StoreContext = createContext();

const Context = ({ children }) => {
    const url = "https://car-website-server.onrender.com";

    return (
        <StoreContext.Provider value={{ url }}>
            {children}
        </StoreContext.Provider>
    );
}

export default Context;
