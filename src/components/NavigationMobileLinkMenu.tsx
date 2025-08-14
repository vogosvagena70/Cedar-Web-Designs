import { useState } from "react";
import { Link } from "react-router";
import type { NavMenu } from "../types/NavMenu";
interface NavigationMobileLinkMenuProps {
  item: NavMenu;
  CloseMobileMenu: () => void;
}
const NavigationMobileLinkMenu = (props: NavigationMobileLinkMenuProps) => {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileServiceMenuOpen, setmobileServiceMenuOpen] = useState(false);

  return (
    <li
      className="cs-li Text-Color Position-Relative MobileMenuItem"
      onMouseOver={() => setServiceMenuOpen(true)}
      onMouseLeave={() => setServiceMenuOpen(false)}
    >
      {serviceMenuOpen ? "" : ""}
      <a
        className="Text-Color nav-text"
        onClick={() => setmobileServiceMenuOpen(!mobileServiceMenuOpen)}
      >
        {props.item.Name}
        <svg
          className="CollapseSubMenuSVG"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#000000"
            stroke-width="1.5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <div
        className={
          mobileServiceMenuOpen === true
            ? "MobileSubMenuContainerOpen"
            : "MobileSubMenuContainer"
        }
      >
        <ul className="MobileServiceSubMenuList">
          {props.item.SubMenus.map((value) => (
            <li className="Color-White">
              <Link
                to={value.Href}
                onClick={() => {
                  setmobileServiceMenuOpen(false);
                  props.CloseMobileMenu();
                }}
              >
                {value.Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavigationMobileLinkMenu;
