import { Icon } from "../../atoms/icons/IconSource";
export const CardProjects = ({
  picture,
  name,
  description,
  url,
  id,
  icon,
  iconAlt,
  tasks,
}) => {
  return (
    <a href={url} className="cardProjects">
      <div id={id} className="cardProjects__recto">
        <div className="cardProjects__cover">
          <img src={picture} alt={name + " project"} />
        </div>
        <div className="cardProjects__description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="cardProjects__verso">
          <div className="cardProjects__cta">
          <Icon icon={icon} alt={iconAlt} />
          <h3 className="h3--cta">See source project</h3>
          </div>
          {tasks ? (
            <div className="tasks">
              <h5>Mission:</h5>
              <ul className="tasks__list">
                {tasks.map((task) => (
                  <li key={id + task} className="tasks__task">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
};
