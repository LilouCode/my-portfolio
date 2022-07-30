import { useState } from "react";
import contact from "../../../data/contact";
import { Icon } from "../../atoms/icons/IconSource";
import Close from '../../../assets/icons/Close.svg'
import Burger from '../../../assets/icons/Burger.svg'
import { BtnBurger } from "../../atoms/buttons/BtnBurger";
import {BtnCTA} from "../../atoms/buttons/BtnCTA";
export const NavMobile = () => {
  const data = contact;
  const [isNotOpen, setIsNotOpen] = useState(true)
  return (
    <div className="nav--burger">
        {isNotOpen? (
      <div className="burger--close" onClick={() => setIsNotOpen(false)}>
        <Icon role="button" icon={Burger} alt="Open menu"/>
      </div>
  ): (
    <div className="burger--open">
        <Icon role="button" icon={Close} alt="Close menu" action={() =>setIsNotOpen(true)}/>
        <BtnBurger content="Home" link="/" />
      <BtnBurger content="About" link="/about" />
      <BtnBurger link="/portfolio" content="Portfolio" />
      <BtnCTA content="Email me" link="#" mailto={"mailto:"+data.Email} />
      </div>
  )}
    </div>
  )
};  