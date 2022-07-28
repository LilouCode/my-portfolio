import { BtnGhost } from "../../atoms/buttons/BtnGhost";
import contact from "../../../data/contact";
export const NavLanding = () => {
  const data = contact;
  return (
    <div className="nav nav--landing">
      <BtnGhost content="About" link="/about" />
      <BtnGhost link="/portfolio" content="Portfolio" />
      <BtnGhost content="Email me" link="#" mailto={"mailto:"+data.Email} />
    </div>
  );
};
