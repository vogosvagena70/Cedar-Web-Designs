import "../styles/ButtonSolid.css";

const ButtonSolid = ({ className = "" }) => {
  if (className === "") {
    className = "cs-button-solid bg-white";
  } else {
    className += " cs-button-solid";
  }
  return (
    <>
      <span className={className}>Get started</span>
    </>
  );
};

export default ButtonSolid;
