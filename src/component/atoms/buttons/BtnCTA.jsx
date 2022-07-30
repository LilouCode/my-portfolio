import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnCTA = ({content = "button", link, mailto, icon, alt}) => {
    return(
        <Link to={link} onClick={mailto? (
            (e) =>{
                window.location.href = mailto;
                e.preventDefault();
            }
        ): null}>
            <button className="btn btn--cta">{content}</button>
        </Link>
    )
}
BtnCTA.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    mailto: PropTypes.string
}