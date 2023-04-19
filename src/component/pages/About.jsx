import { Page } from "../templates/Page";
import Me from "../../assets/images/Me.jpg";
export const About = () => {
  return (
    <Page
      chilidren={
        <>
          <div className="about">
            <div className="about__main">
              <h1 className="h1--page">About me 👩‍🚀</h1>
              <p>
                I'm Lisa, I'm a <strong>frontend developer</strong> and a{" "}
                <strong>designer</strong>.
              </p>
              <p>
                I like to say that I stay sharp because it’s the only way to
                bring the bests digitals solution for technical debt, increased
                performance, and in the end, work for a sustained future. I see
                my work as the challenge always to create the cleanest code as
                it can be made, choose the better tool to reduce its carbon
                footprint, and contribute in another way to build a better world
                for the technology.
              </p>
              <p>
                This is why <strong>Next.js</strong> and{" "}
                <strong>React.js</strong> are two of my favorite frameworks (at least for
                now). They bring closer two of my biggest dreams: create
                stunning user experiences and build a super light code. Having
                the possibility to be bold with creativity without fearing the
                consequences of a bad Lighthouse report, is a game changer for
                every hybrid designer/developer like me but also for any tech
                company that shares the same values.
              </p>
              <p>
                Speaking of which, I believe that values are what bring people
                together. The past years have shown me that every project is
                only possible if each collaborator believes in it.
              </p>
              <p>
                I have a strong team spirit even if I enjoy working on my own
                (Capricorn here). For starting, I learned the value to document
                my code and make my work more understandable to others,
                including myself 4 months after the last commit (learned that at
                my expense). I love sharing my experience with my team or
                clients and learning from others. I always encourage
                constructive feedback.
              </p>
              <p>
                During my experience as a product Designer, I've learned that
                communication is the key to all our problems. You can always
                have the best tool{" "}
                <a href="https://stackshare.io/liloucode/my-stack" target="_blank" rel="noopener noreferrer">
                  (have you seen my stack yet?)
                </a>
                , and the perfect schedule, nothing compares to good
                communication. It is everyone's responsibility to make sure that
                they contribute to that dynamic.
              </p>
            </div>

            <div className="about__asside">
              <img src={Me} alt="Lisa Lox" />
              <div>
                <h3>Hard skills:</h3>
                <ul>
                  <li>#React.js #Next.js #TypeScript #RestAPI</li>
                  <li>#DesignThinking #AtomicDesign #Figma</li>
                </ul>
                <h3>5 random facts:</h3>
                <ul>
                <li>⛵ Passion for sailing and climbing</li>
                  <li>🌎 Vegan for saving water since 2017</li>
                  <li>🏞️ Love to observe the nature</li>
                  <li>🌺 Lived in several Caribbean islands</li>
                  <li>🎹 Performed music on stage</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about__section">
            <div></div>
          </div>
        </>
      }
    />
  );
};
