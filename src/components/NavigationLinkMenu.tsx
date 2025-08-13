import { useState } from "react";
import { Link } from "react-router";
import type { NavMenu } from "../types/NavMenu";
interface NavigationLinkMenuProps {
  Menu: NavMenu;
}

const NavigationLinkMenu = (props: NavigationLinkMenuProps) => {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  return (
    <li
      key={props.Menu.Name}
      className="cs-li Text-Color Position-Relative"
      onMouseOver={() => setServiceMenuOpen(true)}
      onMouseLeave={() => setServiceMenuOpen(false)}
    >
      <a className="Text-Color nav-text">{props.Menu.Name}</a>
      <svg
        className="CollapseSubMenuSVG"
        width="15px"
        height="15px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10L12 15L17 10" stroke="#000000" />
      </svg>
      <ul
        className={serviceMenuOpen === true ? "SubNavMenuOpen" : "SubNavMenu"}
      >
        <li className="SubMenuItem">
          {props.Menu.SubMenus.map((value) => (
            <Link to="/SocialMediaAds" className="Text-Color" key={value.Name}>
              {value.Name}
            </Link>
          ))}
        </li>
      </ul>
      {/* {serviceMenuOpen === true ? (
        <ul className="SubNavMenuOpen">
          <li className="SubMenuItem">
            <Link to="/SocialMediaAds" className="Text-Color">
              Social Media Ads
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )} */}
    </li>
  );
};

export default NavigationLinkMenu;
