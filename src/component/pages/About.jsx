import { Page } from "../templates/Page";
import Me from "../../assets/images/Me.jpg";
export const About = () => {
  return (
    <Page
      chilidren={
        <div className="about">
          <div className="about__main">
            <h1>About me</h1>
            <p>
              After several years of webdesign, I decided to push the limits of
              my skills by becoming Frontend developer.
            </p>
          </div>
          <div className="about__asside">
            <img className="about__img" src={Me} alt="Lisa Lox" />
          </div>
        </div>
      }
    />
  );
};
