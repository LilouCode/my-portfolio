import { Link } from "react-router-dom";
import { HeaderLanding } from "../organisms/headers/HeaderLanding";
import GithubQR from "../../assets/images/GithubQR.png";
export const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
      <HeaderLanding />
      <div className="home__visual">
        <Link className="home__link" to={'/'}>
          <img className="home__link__img" src={GithubQR} alt="Visit my GitHub profile" />
        </Link>
      </div>
      </div>
    </div>
  );
};
