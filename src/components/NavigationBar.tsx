import NavigationLink from "./NavigationLink";
import NavigationLinkMenu from "./NavigationLinkMenu";
import type { NavMenu } from "../types/NavMenu";

const menus: NavMenu[] = [
  { Name: "About us", SubMenus: [{ Name: "FAQ", Href: "faq" }] },
  {
    Name: "Services",
    SubMenus: [{ Name: "Social Media Ads", Href: "socialmediaads" }],
  },
];
const NavigationBar = () => {
  return (
    <div className="ulContainer">
      <ul className="cs-ul ">
        <li className="cs-li">
          <NavigationLink Href="/" Text="Home" />
        </li>

        {menus.map((value) => (
          <NavigationLinkMenu Menu={value} key={value.Name} />
        ))}
        <li className="cs-li">
          <NavigationLink Href="/ContactUs" Text="Contact us" />
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
