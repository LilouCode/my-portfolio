import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnGhost = ({content = "button", link, mailto}) => {
    console.log(content.length)
    return(
        <Link to={link} onClick={mailto? (
            (e) =>{
                window.location.href = mailto;
                e.preventDefault();
            }
        ): null}>
            <button className={(content.length < 10? "btn btn--ghost": "btn btn--ghost btn--xxl")}>{content}</button>
        </Link>
    )
}
BtnGhost.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    mailto: PropTypes.string
}