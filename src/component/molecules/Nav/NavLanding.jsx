import { BtnGhost } from "../../atoms/buttons/BtnGhost";
export const NavLanding = () => {
  return (
    <div className="nav nav--landing">
      <BtnGhost content="About" link="/about" />
      <BtnGhost link="/portfolio" content="Portfolio" />
      <BtnGhost content="Contact" link="/contact" />
    </div>
  );
};
