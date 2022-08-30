import React, { useState } from "react";

export const SourceContext = React.createContext();

export const SourceProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const showContent = () =>{
        setTimeout(()=> setLoading(false), 7000)
    }
    return(
        <SourceContext.Provider value={{loading, showContent}}>
            {children}
        </SourceContext.Provider>
    )
}