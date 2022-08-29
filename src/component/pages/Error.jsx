import { Page } from "../templates/Page";
import ErrorSpace from "../../assets/images/ErrorSpace.svg";
import { BtnGhost } from "../atoms/buttons/BtnGhost";
export const Error = () => {
  return (
    <Page
      chilidren={
        <main className="error">
          <div className="error__header">
            <h1>
              <img role="alert" src={ErrorSpace} alt="404 error" />
            </h1>
            <div className="error__body">
            <div className="error__body__description">
            <h2>Lost in space</h2>
            <p>You have reached the end of the universe.</p>
            </div>
            <BtnGhost link="/" content="Back to home" />
            </div>
          </div>
        </main>
      }
    />
  );
};
