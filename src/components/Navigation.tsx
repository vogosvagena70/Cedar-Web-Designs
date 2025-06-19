import { useEffect, useState } from "react";
import "../styles/navigation.css";
import WhiteLogo from "../assets/svg/logo-white.svg";
import ButtonSolid from "./ButtonSolid";

const Navigation = () => {
  const [scrolledPass100, setScrolledPass100] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolledPass100(true);
      } else {
        setScrolledPass100(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  });

  return (
    <>
      <div className="HeaderContainer">
        <div
          className={
            scrolledPass100 == false ? "NavContainer" : "NavContainerFull"
          }
        >
          <div className="container">
            <img
              alt="logo"
              src={WhiteLogo}
              height="43"
              width="197"
              decoding="async"
              aria-hidden="true"
              loading="lazy"
            ></img>
            <nav className="NavBar">
              <div className="ulContainer">
                <ul className="cs-ul">
                  <li className="cs-li">
                    <a>Home</a>
                  </li>
                  <li className="cs-li">
                    <a>About us</a>
                  </li>
                  <li className="cs-li">
                    <a>Services</a>
                  </li>
                  <li className="cs-li">
                    <a>Pricing</a>
                  </li>
                  <li className="cs-li">
                    <a>Blog</a>
                  </li>
                  <li className="cs-li">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="position-relative">
              <ButtonSolid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
