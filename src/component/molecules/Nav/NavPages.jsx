import { BtnNav } from "../../atoms/buttons/BtnNav"
export const NavPages = () =>{
    return(
        <div className="nav nav--pages">
            <BtnNav content="Home" link="/"/>
            <BtnNav content="About" link="/about"/>
            <BtnNav content="Portfolio" link="/portfolio"/>
            <BtnNav content="Contact" link="/contact"/>
        </div>
    )
}