import { BtnNav } from "../../atoms/buttons/BtnNav"
import contact from "../../../data/contact"
export const NavPages = () =>{
    const data = contact;
    return(
        <div className="nav nav--pages">
            <BtnNav content="Home" link="/"/>
            <BtnNav content="About" link="/about"/>
            <BtnNav content="Portfolio" link="/portfolio"/>
            <BtnNav content="Contact" link="#" mailto={"mailto:"+data.Email}/>
        </div>
    )
}