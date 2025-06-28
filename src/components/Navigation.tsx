import { useEffect, useState } from "react";
import "../styles/navigation.css";
import CedarLogo from "../assets/images/Logo/cedar.svg";
import CedarBlackLogo from "../assets/images/Logo/cedar-black.svg";
import ButtonSolid from "./ButtonSolid";

const Navigation = () => {
  const [scrolledPass100, setScrolledPass100] = useState(false);
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    document.body.classList = "";
    if (theme === "light") {
      setTheme("dark");
      document.body.classList = "dark";
    } else {
      setTheme("light");
    }
  };

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
            <picture className="LogoContainer">
              <img
                alt="logo"
                src={CedarLogo}
                height="43"
                width="197"
                decoding="async"
                aria-hidden="true"
                loading="lazy"
                className="nav-logo"
              ></img>
              <img
                alt="logo"
                src={CedarBlackLogo}
                height="43"
                width="197"
                decoding="async"
                aria-hidden="true"
                loading="lazy"
                className="nav-logo-black"
              ></img>
            </picture>

            <nav className="NavBar">
              <div className="ulContainer">
                <ul className="cs-ul ">
                  <li className="cs-li">
                    <a href="#HeroSection" className="Text-Color nav-text">
                      Home
                    </a>
                  </li>
                  <li className="cs-li">
                    <a href="#AboutUs" className="Text-Color nav-text">
                      About us
                    </a>
                  </li>
                  <li className="cs-li">
                    <a href="#Services" className="Text-Color nav-text">
                      Services
                    </a>
                  </li>
                  <li className="cs-li">
                    <a href="#Portfolio" className="Text-Color nav-text">
                      Our Work
                    </a>
                  </li>
                  <li className="cs-li">
                    <a href="#pricing" className="Text-Color nav-text">
                      Pricing
                    </a>
                  </li>
                  <li className="cs-li">
                    <a className="Text-Color nav-text">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="position-relative nav-button">
              <ButtonSolid className="bg-white color-black" />
            </div>
            <span className="ThemeContainer" onClick={ToggleTheme}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="SVG-Color"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#fff"
                />
              </svg>
              {/* <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="SVG-Color"
              >
                <path
                  d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.395 14.106c2.958-1.383 2.828-6.068 5.758-5.884-4.125-2.74-4.019 3.106-9.089 1.235 1.107-3.068-2.292-6.286-0.091-8.227-4.855 0.979-0.645 5.039-5.555 7.301-1.384-2.958-6.068-2.828-5.884-5.758-2.74 4.125 3.106 4.019 1.235 9.089-3.068-1.107-6.286 2.292-8.227 0.091 0.979 4.855 5.039 0.645 7.301 5.555-2.958 1.384-2.828 6.068-5.758 5.884 4.125 2.74 4.019-3.106 9.089-1.235-1.107 3.068 2.292 6.286 0.091 8.227 4.855-0.979 0.645-5.039 5.555-7.301 1.384 2.958 6.068 2.828 5.884 5.758 2.74-4.125-3.106-4.019-1.235-9.089 3.068 1.107 6.286-2.292 8.226-0.091-0.979-4.855-5.039-0.645-7.301-5.555z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
