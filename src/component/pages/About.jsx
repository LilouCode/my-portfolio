import { Page } from "../templates/Page";
import Me from "../../assets/images/Me.jpg";
export const About = () => {
  return (
    <Page
      chilidren={
        <>
          <div className="about">
            <div className="about__main">
              <h1>About me 👩‍🚀</h1>
              <p>I'm Lisa, I'm a Frontend developer and a designer.</p>
              <p>
                I like to say that I stay sharp because it’s the only way to
                bring the bests digitals solution for technical debt, increased
                performance, and in the end, work for a sustained future. I see
                my work as the challenge always to create the cleanest code as
                it can be made, choose the better tool to reduce its carbon
                footprint, and contribute in another way to build a better world
                for the technology. This is why Next.js and React.js are two of
                my favorites framework (for now). They bring closer two of my
                biggest dreams: create stunning user experiences and build a
                super light code. Having the possibility to be bold with
                creativity without fearing the consequences of a bad Lighthouse
                report, is a game changer for every hybrid designer/developer
                like me but also for any tech company that shares the same
                values.
              </p>
              <p>
                Speaking of which, I believe that values are what bring people
                together. The past years have shown me that every project is
                only possible if each collaborator believes in it. I have a
                strong team spirit even if I enjoy working on my own (Capricorn
                here). For starting, I learned the value to document my code and
                make my work more understandable to others, including myself
                after 4 months after the last commit(learned that at my
                expense). I love sharing my experience with my team or clients
                and learning from others. I always encourage constructive
                feedback. During my experience as a Product Designer, I've
                learned that communication is the key to all our problems. You
                can always have the best tool (have you seen my stack yet?), and
                the perfect schedule, nothing compares to good communication. It
                is everyone's responsibility to make sure that they contribute
                to that dynamic.
              </p>
            </div>

            <div className="about__asside">
              <img src={Me} alt="Lisa Lox" />
              <div>
                <h2>Fun facts about me</h2>
                <ul>
                  <li>
                    🚸 Had my first laptop at 5 years old (yes it was yellow)
                  </li>
                  <li>🌴 Lived in several Caribbean islands</li>
                  <li>🎹 Performed music on stage</li>
                  <li>⛵ Passion for sailing and climbing</li>
                  <li>🌎 Vegan for saving water since 2017</li>
                  <li>🏞️ Love to observe the nature</li>
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
