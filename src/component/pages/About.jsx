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
              my skills by becoming Frontend developer. I always try to be one
              step ahead of what can be done .
            </p>
            <p>
            Since my childhood I have always
              liked to handle the computer, just like the will to go always
              further in the infinity of data processing. I was the geek who
              always gave advice to his classmates until the day the teacher
              found all the computer screens in the room displaying kitsch
              animated texts (well, I was nine years old).
            </p>
            <p>
              Having become my
              passion, IT has always been part of my choices for the future,
              whether in design or programming. For me, a good developer is
              someone who values the quality of teamwork, understands the needs
              of the business, always appreciates constructive feedback, is a
              productive perfectionist, is curious and is never satisfied with
              what he has learned.
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
