import { Icon } from "../../atoms/icons/IconSource"
export const CardSocial = ({href, icon, alt})=>{
    return(
        <a  href={href}>
        <Icon icon={icon} alt={alt}/>
        </a>
    )
}