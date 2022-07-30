import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnBurger = ({ content = "button", link, mailto }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "btn btn--burger btn--burger--active" : "btn btn--burger"
      }
      onClick={
        mailto
          ? (e) => {
              window.location.href = mailto;
              e.preventDefault();
            }
          : null
      }
    >
      {content}
    </NavLink>
  );
};
BtnBurger.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  mailto: PropTypes.string,
};
