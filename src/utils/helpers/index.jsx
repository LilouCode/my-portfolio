import { dataDesign, dataDev, dataFull } from "../hooks";
import portfolio from "../../data/data";
import Figma from "../../assets/icons/Figma.svg";
import GitHub from "../../assets/icons/GitHub.svg";
import Web from "../../assets/icons/Web.svg";
export const hats = {
    dev : dataDev,
    design: dataDesign,
    both: dataFull,
    all: portfolio
}
export const icons = {
    gitHub: GitHub,
    Figma: Figma,
    web: Web,
  };