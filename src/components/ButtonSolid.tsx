import { Link } from "react-router";
import "../styles/buttonSolid.css";

const ButtonSolid = ({
  className = "",
  text = "Get started",
  linkTo = "#",
  blank = false,
}) => {
  if (className === "") {
    className = "cs-button-solid bg-white";
  } else {
    className += " cs-button-solid";
  }
  return (
    <>
      <Link to={linkTo} target={blank ? "_blank" : ""}>
        <span className={className}>{text}</span>
      </Link>
    </>
  );
};

export default ButtonSolid;
