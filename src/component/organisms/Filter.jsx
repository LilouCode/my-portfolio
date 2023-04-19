import { DropdownBtn } from "../atoms/DropdownBtn";
import { useSource } from "../../utils/hooks";
import { useState, useRef, useEffect } from "react";
export const Filter = () =>{
    const { filters, handleClick} = useSource()
    const [isOpen, setOpen] = useState(false)
    let dropOpen = useRef()
    useEffect(() =>{
        const handleClickOutside = (e) => {
            if(dropOpen.current && !dropOpen.current.contains(e.target)){
                setOpen(false)
                console.log(dropOpen.current)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return() =>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [dropOpen])
    return(
        <div className="filter">
            <h4>🧢 Filter projects by hats:</h4>
        {isOpen?
    (<div className="dropdown" ref={dropOpen} onClick={() => setOpen(false)}>
        <DropdownBtn compare={filters} content="All projects" id="all" setCompare={() => handleClick("all")}/>
        <DropdownBtn compare={filters} content="Dev + design" id="both" setCompare={() => handleClick("both")}/>
        <DropdownBtn compare={filters} content="Developer" id="dev" setCompare={() => handleClick("dev")}/>
        <DropdownBtn compare={filters} content="Designer" id="design" setCompare={() => handleClick("design")}/>
        </div>) :
        (<div onClick={() => setOpen(true)} className="dropdown dropdown--row">
            <h5 >{filters}</h5> 
            <span>⏬</span>
        </div>)  
    }
        
      </div>
    
    )
}