import NavigationLink from "./NavigationLink";
import NavigationLinkMenu from "./NavigationLinkMenu";
const NavigationBar = () => {
  return (
    <div className="ulContainer">
      <ul className="cs-ul ">
        <li className="cs-li">
          <NavigationLink Href="/" Text="Home" />
        </li>
        <li className="cs-li">
          <NavigationLink Href="/ContactUs" Text="Contact us" />
        </li>
        <NavigationLinkMenu />
      </ul>
    </div>
  );
};

export default NavigationBar;
