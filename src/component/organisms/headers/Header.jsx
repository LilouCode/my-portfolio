import { Link } from "react-router-dom";
import { NavPages } from "../../molecules/Nav/NavPages";
import LogoGitHub from "../../../assets/images/LogoGitHub.png";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__titles">
        <h2 className="h2--header">Lisa Lox</h2>
        <h6>Frontend Developer {"&"} Web Designer</h6>
      </div>
      <NavPages />
      <Link to="./">
          <img
            className="header__logo"
            src={LogoGitHub}
            alt="Visit my GitHub profile"
          />
        </Link>
    </div>
  );
};
