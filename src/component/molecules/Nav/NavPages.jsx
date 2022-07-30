import { BtnNav } from "../../atoms/buttons/BtnNav"
import { BtnCTA } from "../../atoms/buttons/BtnCTA";
import contact from "../../../data/contact"
import Email from '../../../assets/icons/Email.svg'
export const NavPages = () =>{
    const data = contact;
    return(
        <div className="nav nav--pages">
            <BtnNav content="About" link="/about"/>
            <BtnNav content="Portfolio" link="/portfolio"/>
            <BtnCTA content="Let's collaborate!" link="#" mailto={"mailto:"+data.Email} icon={Email} alt={"Send a email to "+data.Email}/>
        </div>
    )
}