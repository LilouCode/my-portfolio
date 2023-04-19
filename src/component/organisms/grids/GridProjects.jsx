import { CardProjects } from "../../molecules/Cards/CardProjects";
import Default from "../../../assets/images/Default.png";
import { useSource } from "../../../utils/hooks";
import { Filter } from "../Filter";
import { icons } from "../../../utils/helpers";

export const GridProjects = () => {
  const {data} = useSource()
  return (
    <>
      <Filter/>
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
          iconAlt={"link to the url: "+project.url}
          tasks={project.toDo ? project.toDo : null}
          cta={
            project.source === "web"
              ? "Visit the website"
              : project.source === "gitHub" ? "View code" : "Go to Figma"
          }
        />
      ))}
    </div>
    </>
  );
    
};
