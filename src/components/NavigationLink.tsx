import { Link } from "react-router";
const NavigationLink = ({ Text = "", Href = "" }) => {
  return (
    <a href="#">
      <Link to={Href} className="Text-Color nav-text">
        {Text}
      </Link>
    </a>
  );
};

export default NavigationLink;
