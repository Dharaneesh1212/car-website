import { useContext } from "react";

export const StoreContext = useContext();

const Context = ({children}) => {
    const url = "http://localhoste:8000"
    return ( 
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
     );
}
 
export default Context;