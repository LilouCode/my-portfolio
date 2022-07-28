import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnGhost = ({content = "button", link, mailto}) => {
    return(
        <Link to={link} onClick={mailto? (
            (e) =>{
                window.location.href = mailto;
                e.preventDefault();
            }
        ): null}>
            <button className="btn btn--ghost">{content}</button>
        </Link>
    )
}
BtnGhost.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    mailto: PropTypes.string
}