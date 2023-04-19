import {useSource} from '../../utils/hooks';
import { HeaderLanding } from "../organisms/headers/HeaderLanding";
import { Loader } from "../organisms/Loader";
import GithubQR from "../../assets/images/GithubQR.png";
import { GridContact } from "../organisms/grids/GridContact";
export const Home = () => {
const {loading, showContent} = useSource()
  showContent()
  return (
    (loading? (<Loader/>): (
      <div className="home">
      <div className="home__main">
      <HeaderLanding />
      <div className="home__contact">
      <GridContact/>
      </div>
      <div className="home__visual">
        <a className="home__link" href={'https://github.com/LilouCode'} target="_blank" rel="noopener noreferrer">
          <img className="home__link__img" src={GithubQR} alt="Visit my GitHub profile" />
        </a>
      </div>
      <h6 className="home--footer">Made by Lisa Lox with ❤️ - All rights reserved © 2022</h6>
      </div>
      
    </div>
    ) )
  );
};
