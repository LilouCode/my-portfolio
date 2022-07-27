import { Page } from "../templates/Page";
import contact from "../../data/contact";
export const Contact = () =>{
    const data = contact;
    return(
        <Page chilidren={
            <div className="contact">
          <div className="contact__main">
            <h1>Contact me</h1>
            <p>
              and let's collaborate together !
            </p>
          </div>
          <div className="contact__asside">
            <h4>{data.name}</h4>
            <ul>
                <li>
                    {data.email}
                </li>
                <li>
                    {data.github}
                </li>
                <li>
                    {data.place}
                </li>
            </ul>
          </div>
          </div>
        }/>
    )
}