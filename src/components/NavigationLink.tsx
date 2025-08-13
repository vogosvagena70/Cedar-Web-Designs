import { Link } from "react-router";
const NavigationLink = ({ Text = "", Href = "" }) => {
  return (
    <Link to={Href} className="Text-Color nav-text">
      {Text}
    </Link>
  );
};

export default NavigationLink;
