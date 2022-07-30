import { CardProjects } from "../../molecules/Cards/CardProjects";
import portfolio from "../../../data/data";
import Default from "../../../assets/images/Default.png";
import Figma from "../../../assets/icons/Figma.svg";
import GitHub from "../../../assets/icons/GitHub.svg";
import Web from "../../../assets/icons/Web.svg";

export const GridProjects = () => {
  const data = portfolio.sort(function(a,b) {
    return b.id - a.id
  });
  const icons = {
    gitHub: GitHub,
    Figma: Figma,
    web: Web,
  };
  return (
    <div className="gridProjects">
      {data.map((project) => (
        <CardProjects
          key={"card-project-id-" + project.id}
          url={project.url}
          name={project.title}
          picture={project.picture ? project.picture : Default}
          description={project.descrition}
          id={project.id}
          icon={icons[project.source]}
          tasks={project.toDo ? project.toDo : null}
          cta={
            project.source === "web"
              ? "Visit the website"
              : "View project"
          }
        />
      ))}
    </div>
  );
};
