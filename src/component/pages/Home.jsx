import { HeaderLanding } from "../organisms/headers/HeaderLanding";
import GithubQR from "../../assets/images/GithubQR.png";
import { GridContact } from "../organisms/grids/GridContact";
export const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
      <HeaderLanding />
      <div className="home__contact">
      <GridContact/>
      </div>
      <div className="home__visual">
        <a className="home__link" href={'https://github.com/LilouCode'}>
          <img className="home__link__img" src={GithubQR} alt="Visit my GitHub profile" />
        </a>
      </div>
      </div>
    </div>
  );
};
