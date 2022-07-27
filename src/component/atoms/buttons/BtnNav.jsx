import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export const BtnNav = ({ content = "button", link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "btn btn--nav btn--nav--active" : "btn btn--nav"
      }
    >
      {content}
    </NavLink>
  );
};
BtnNav.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
