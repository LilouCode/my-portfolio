import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnGhost = ({content = "button", link}) => {
    return(
        <Link to={link}>
            <button className="btn btn--ghost">{content}</button>
        </Link>
    )
}
BtnGhost.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}