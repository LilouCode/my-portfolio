import PropTypes from "prop-types";
export const BtnNav = ({content = "button"}) => {
    return(
        <button className="btn btn--nav">{content}</button>
    )
}
BtnNav.propTypes = {
    content: PropTypes.string.isRequired
}