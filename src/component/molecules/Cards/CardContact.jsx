import { Icon } from "../../atoms/icons/IconSource"
import {Link} from "react-router-dom"
export const CardContact = ({mailto, icon, alt})=>{
    return(
        <Link to='#' onClick={ (e) =>{
            window.location.href = mailto;
            e.preventDefault();
        }}>
        <Icon option="icon--contact" icon={icon} alt={alt}/>
        </Link>
    )
}