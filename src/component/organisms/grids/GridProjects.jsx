import { CardProjects } from "../../molecules/Cards/CardProjects";
import portfolio from "../../../data/data";
import Default from "../../../assets/images/Default.png";
import Figma from "../../../assets/icons/Figma.svg";
import GitHub from "../../../assets/icons/GitHub.svg";
import { useState, useEffect } from "react";
import { Loader } from "../../atoms/loaders/Loader";

export const GridProjects = () => {
  const data = portfolio;
  const [wait, setWait] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="gridProjects">
      {wait? <Loader/> : (
        data.map((project) => (
          <CardProjects
            key={"card-project-id-" + project.id}
            url={project.url}
            name={project.title}
            picture={project.picture ? project.picture : Default}
            description={project.descrition}
            id={project.id}
            icon={project.source === "Figma" ? Figma : GitHub}
            tasks = {project.toDo? project.toDo: null}
          />
        ))
      )}
    </div>
  )
};
