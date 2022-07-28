import { CardSocial } from "../../molecules/Cards/CardSocial";
import Twitter from "../../../assets/icons/Twitter.svg";
import Linkedin from "../../../assets/icons/Linkedin.svg";
import contact from "../../../data/contact";

export const GridContact = ()=>{
    const data = contact;
    return(
        <div className="gridContact">
              <CardSocial href={data.Linkedin} icon={Linkedin} alt="go to Linkedin"/>
              <CardSocial href= {data.Twitter} icon={Twitter} alt="go to Twitter"/>
        </div>
    )
}