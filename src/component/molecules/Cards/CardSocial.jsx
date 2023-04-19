import { Icon } from "../../atoms/icons/IconSource"
export const CardSocial = ({href, icon, alt})=>{
    return(
        <a  href={href} target="_blank" rel="noopener noreferrer">
        <Icon icon={icon} alt={alt}/>
        </a>
    )
}