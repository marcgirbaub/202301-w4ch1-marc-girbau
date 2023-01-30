import "./Gentleman.css";
import { Gentleman } from "../../types";

interface GentlemanProps {
  gentleman: Gentleman;
}

const Genlteman = ({
  gentleman: {
    name,
    profession,
    status,
    twitter,
    alternativeText,
    picture,
    selected,
  },
}: GentlemanProps): JSX.Element => {
  const isSelected = selected ? "selected" : "";

  return (
    <li className={`gentleman ${isSelected}`}>
      <div className="gentleman__avatar-container">
        <img
          src={picture}
          alt={alternativeText}
          className="gentleman__avatar"
        />
        <span className="gentleman__initial">{name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>
            {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Genlteman;
