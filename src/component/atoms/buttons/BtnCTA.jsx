import PropTypes from "prop-types";
export const BtnCTA = ({content = "button"}) => {
    return(
        <button className="btn btn--cta">{content}</button>
    )
}
BtnCTA.propTypes = {
    content: PropTypes.string.isRequired
}