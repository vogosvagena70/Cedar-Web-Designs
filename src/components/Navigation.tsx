import { useEffect, useState } from "react";
import "../styles/navigation.css";
// import CedarLogo from "../assets/images/Logo/cedar.svg";
// import CedarLogoComp from "./CedarLogo";
// import CedarBlackLogo from "../assets/images/Logo/cedar-black.svg";
import NewCedarBlackLogo from "../assets/images/Logo/NewCedarBlackPNG.png";
import NewCedarWhiteLogo from "../assets/images/Logo/NewCedarWhitePNG.png";
import ButtonSolid from "./ButtonSolid";
import { Link } from "react-router";
import NavigationBar from "./NavigationBar";
import { useSystemTheme } from "../hooks/useSystemTheme";

const Navigation = () => {
  const [scrolledPass100, setScrolledPass100] = useState(false);
  const [theme, setTheme] = useState("light");
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileServiceMenuOpen, setmobileServiceMenuOpen] = useState(false);
  const systemTheme = useSystemTheme();

  useEffect(() => {
    setTheme(systemTheme);
    localStorage.setItem("selectedTheme", systemTheme);
    document.body.classList = systemTheme;
  }, [systemTheme]);

  const ToggleTheme = () => {
    document.body.classList = "";
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("selectedTheme", "dark");
      document.body.classList = "dark";
    } else {
      setTheme("light");
      localStorage.setItem("selectedTheme", "light");
    }
  };

  //const selectedTheme = localStorage.getItem("selectedTheme");
  // if (selectedTheme === "dark") {
  //   setTheme("dark");
  // }

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
      {serviceMenuOpen ? "" : ""}
      <div className="HeaderContainer">
        <div
          className={
            scrolledPass100 == false ? "NavContainer" : "NavContainerFull"
          }
        >
          <div className="container">
            <Link to="/" aria-label="Link to #HeroSection">
              <picture
                className="LogoContainer"
                data-name="LogoContainer"
                id="LogoContainer"
                aria-label="Link to #HeroSection"
              >
                <img
                  alt="Cedar web design white logo"
                  src={NewCedarWhiteLogo}
                  decoding="async"
                  aria-hidden="true"
                  loading="lazy"
                  className="nav-logo"
                  height="43"
                  width="197"
                ></img>
                <img
                  alt="Cedar web design black logo"
                  src={NewCedarBlackLogo}
                  decoding="async"
                  aria-hidden="true"
                  loading="lazy"
                  className="nav-logo-black"
                  height="43"
                  width="197"
                ></img>
                {/* <CedarLogoComp /> */}
                <div
                  className="neon"
                  aria-hidden="true"
                  aria-label="after dark"
                >
                  <span>A</span> <span>f</span> <span>t</span> <span>e</span>{" "}
                  <span>r</span> <span>D</span> <span>a</span> <span>r</span>{" "}
                  <span>k</span>
                </div>
              </picture>
            </Link>

            <nav className="NavBar">
              <NavigationBar />
            </nav>
            <div className="RightContainer">
              <div className="position-relative nav-button">
                <ButtonSolid
                  className="bg-primary color-black secondary-hover"
                  linkTo="/ContactUs"
                />
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

                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="SunSVG"
                >
                  <path
                    d="M11.75 5.5C11.1977 5.5 10.75 5.05228 10.75 4.5V2C10.75 1.44772 11.1977 1 11.75 1H12.25C12.8023 1 13.25 1.44772 13.25 2V4.5C13.25 5.05228 12.8023 5.5 12.25 5.5H11.75Z"
                    fill="#000000"
                  />
                  <path
                    d="M16.4194 7.22698C16.0289 6.83646 16.0289 6.20329 16.4194 5.81277L18.1872 4.045C18.5777 3.65447 19.2109 3.65447 19.6014 4.045L19.9549 4.39855C20.3455 4.78908 20.3455 5.42224 19.9549 5.81277L18.1872 7.58053C17.7967 7.97106 17.1635 7.97106 16.773 7.58053L16.4194 7.22698Z"
                    fill="#000000"
                  />
                  <path
                    d="M18.5 11.75C18.5 11.1977 18.9477 10.75 19.5 10.75H22C22.5523 10.75 23 11.1977 23 11.75V12.25C23 12.8023 22.5523 13.25 22 13.25H19.5C18.9477 13.25 18.5 12.8023 18.5 12.25V11.75Z"
                    fill="#000000"
                  />
                  <path
                    d="M16.7728 16.4194C17.1633 16.0289 17.7965 16.0289 18.187 16.4194L19.9548 18.1872C20.3453 18.5777 20.3453 19.2109 19.9548 19.6014L19.6012 19.9549C19.2107 20.3455 18.5775 20.3455 18.187 19.9549L16.4192 18.1872C16.0287 17.7967 16.0287 17.1635 16.4192 16.773L16.7728 16.4194Z"
                    fill="#000000"
                  />
                  <path
                    d="M12.25 18.5C12.8023 18.5 13.25 18.9477 13.25 19.5V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V19.5C10.75 18.9477 11.1977 18.5 11.75 18.5H12.25Z"
                    fill="#000000"
                  />
                  <path
                    d="M7.58059 16.773C7.97111 17.1635 7.97111 17.7967 7.58059 18.1872L5.81282 19.955C5.4223 20.3455 4.78913 20.3455 4.39861 19.955L4.04505 19.6014C3.65453 19.2109 3.65453 18.5778 4.04505 18.1872L5.81282 16.4195C6.20334 16.0289 6.83651 16.0289 7.22703 16.4195L7.58059 16.773Z"
                    fill="#000000"
                  />
                  <path
                    d="M5.5 12.25C5.5 12.8023 5.05228 13.25 4.5 13.25H2C1.44772 13.25 1 12.8023 1 12.25V11.75C1 11.1977 1.44772 10.75 2 10.75H4.5C5.05228 10.75 5.5 11.1977 5.5 11.75V12.25Z"
                    fill="#000000"
                  />
                  <path
                    d="M7.22722 7.58059C6.8367 7.97111 6.20353 7.97111 5.81301 7.58059L4.04524 5.81282C3.65472 5.4223 3.65472 4.78913 4.04524 4.39861L4.3988 4.04505C4.78932 3.65453 5.42248 3.65453 5.81301 4.04505L7.58078 5.81282C7.9713 6.20334 7.9713 6.83651 7.58078 7.22703L7.22722 7.58059Z"
                    fill="#000000"
                  />
                  <path
                    d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
                    fill="#000000"
                  />
                </svg>
              </span>
              <div onClick={() => setNavMenuOpen(!navMenuOpen)}>
                <div>
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="HamburgerSVG"
                  >
                    <path
                      d="M4 18L20 18"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 12L20 12"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 6L20 6"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={
                navMenuOpen === true
                  ? "MobileNavMenuContainerOpen"
                  : "MobileNavMenuContainer"
              }
            >
              <div className="MobileNavMenu">
                <ul className="MobileNavMenuList">
                  <li className="MobileMenuItem">
                    <Link
                      to="/"
                      className="Text-Color MobileLink"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="cs-li Text-Color Position-Relative MobileMenuItem"
                    onMouseOver={() => setServiceMenuOpen(true)}
                    onMouseLeave={() => setServiceMenuOpen(false)}
                  >
                    <a
                      className="Text-Color nav-text"
                      onClick={() =>
                        setmobileServiceMenuOpen(!mobileServiceMenuOpen)
                      }
                    >
                      Services
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
                        <li className="Color-White">
                          <Link
                            to="/SocialMediaAds"
                            onClick={() => {
                              setNavMenuOpen(false);
                              setmobileServiceMenuOpen(false);
                            }}
                          >
                            Social Media Ads
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="MobileMenuItem">
                    <Link
                      to="/ContactUs"
                      className="Text-Color MobileLink"
                      onClick={() => setNavMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
