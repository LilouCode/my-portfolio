import { useContext} from "react";
import { SourceContext} from '../context'
import portfolio from "../../data/data";
export function useSource() {
 const {loading, showContent, filters, data, handleClick} = useContext(SourceContext)
 return {loading, showContent, filters, data, handleClick}
} 

export const dataDev = portfolio.filter((project) => project.filter.includes("dev")|| project.filter.includes("both"));
console.log(dataDev)

export const dataDesign = portfolio.filter((project) => project.filter.includes("design") || project.filter.includes("both"));
console.log(dataDesign)

export const dataFull = portfolio.filter((project) => project.filter.includes("both"));
console.log(dataFull)