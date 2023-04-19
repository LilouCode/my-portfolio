import { Link} from "react-router-dom";
import { NavPages } from "../../molecules/Nav/NavPages";
import {NavMobile} from "../../molecules/Nav/NavMobile"
import LogoGitHub from "../../../assets/images/LogoGitHub.png";
import { Icon } from "../../atoms/icons/IconSource";
import Logo from '../../../assets/icons/Logo.svg'
export const Header = () => {
  return (
    <div className="header">
      <div className="header__titles">
        <Link to="/">
        <Icon icon={Logo} alt="Lisa Front Dev - Website"/>
        </Link>
        {/* <h2 className="h2--header">Lisa Lox</h2>
        <h6>Frontend Developer {"&"} Web Designer</h6> */}
      </div>
      <NavPages />
      <NavMobile/>
      <a className="header__link" href={'https://github.com/LilouCode'} target="_blank" rel="noopener noreferrer">
          <img
            className="header__logo"
            src={LogoGitHub}
            alt="Visit my GitHub profile"
          />
        </a>
    </div>
  );
};
