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
      <a href={linkTo} target={blank === true ? "_blank" : ""}>
        <span className={className}>{text}</span>
      </a>
    </>
  );
};

export default ButtonSolid;
