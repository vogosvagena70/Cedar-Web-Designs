import { useState } from "react";
import { Link } from "react-router";
const NavigationLinkMenu = () => {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  return (
    <li
      className="cs-li Text-Color Position-Relative"
      onMouseOver={() => setServiceMenuOpen(true)}
      onMouseLeave={() => setServiceMenuOpen(false)}
    >
      <a className="Text-Color nav-text">Services</a>
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {serviceMenuOpen === true ? (
        <ul className="SubNavMenuOpen">
          <li className="SubMenuItem">
            <Link to="/SocialMediaAds" className="Text-Color">
              Social Media Ads
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};

export default NavigationLinkMenu;
