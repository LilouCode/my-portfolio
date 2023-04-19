import { Page } from "../templates/Page"
import { GridProjects } from "../organisms/grids/GridProjects"
export const Portfolio = () =>{
    return(
        <Page chilidren={
            <div className="portfolio">
          <div className="portfolio__main">
            <div>
            <h1 className="h1--page">Portfolio 🔭</h1>
            <p>
            Here is a selection of projects that have enriched my knowledge
            </p>
            </div>
            <GridProjects/>
          </div>
        </div>
        }/>
    )
}