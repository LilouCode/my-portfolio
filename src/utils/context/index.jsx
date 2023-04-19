import React, { useState } from "react";
import portfolio from "../../data/data";
import { hats } from "../helpers";
export const SourceContext = React.createContext();

export const SourceProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [filters, setFilter] = useState('All projects')
    const [data, setData] = useState(portfolio.sort(function(a,b) {
        return b.id - a.id
      }))
    const handleClick = (payload) =>{
        setData(hats[payload].sort(function(a,b) {
            return b.id - a.id
          }))
        const newFilter = document.getElementById(payload).innerText
        setFilter(newFilter)
      }
    
    const showContent = () =>{
        setTimeout(()=> setLoading(false), 7000)
    }
    return(
        <SourceContext.Provider value={{loading, showContent, filters, data, handleClick}}>
            {children}
        </SourceContext.Provider>
    )
}