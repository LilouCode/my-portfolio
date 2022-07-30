import PropTypes from "prop-types";
export const Icon = ({icon, alt, role, action}) =>{
    return(
        <img className="icon icon--source" src={icon} alt={alt} role={role} onClick={action} />
    )
}
Icon.propTypes ={
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    role: PropTypes.string,
    action: PropTypes.func
}