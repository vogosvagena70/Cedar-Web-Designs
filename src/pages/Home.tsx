import Body from "../components/Body";
import ButtonSolid from "../components/ButtonSolid";
import "../styles/home.css";
import "../styles/fontsizes.css";
import mockup from "../assets/images/mockup.png";
const Home = () => {
  return (
    <>
      <section className="HeroSection">
        <div className="Hero-filler"></div>
        <div className="Hero-wrapper">
          <div className="Hero-container">
            <div className="Hero color-white">
              <span className="hero-top">Custom Designs, Custom Coded</span>
              <span>
                <h1 className="color-white hero-title font-XL">
                  Small Business Web Designer
                </h1>
              </span>
              <div className="hero-text-container">
                <span className="color-white hero-text">
                  No page builders or WordPress. We offer 100% hand-coded
                  websites with superior results starting at $175/mo as well as
                  Google Ads and SEO services.
                </span>
              </div>

              <div className="buttons-container">
                <div>
                  <ButtonSolid />
                </div>
                <div className="color-white">About us</div>
              </div>
            </div>

            <div className="mockup-container">
              <img
                className="mockup-img"
                src={mockup}
                width={636}
                height={593}
              ></img>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <svg
            className="cs-wave desktop"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1920 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </section>

      <section className="ServicesSection">
        <div className="ServiceWrapper">
          <div className="ServicesContainer">
            <div className="ServiceDescriptionContainer">
              <div className="  text-align-center">WHAT WE DO</div>
              <div className=" ">
                <p className="text-large text-align-center">
                  NEVER WORRY ABOUT YOUR WEBSITE EVER AGAIN
                </p>
              </div>
              <div className="text-align-center pt-2">
                At Oak Harbor Web Designs, we specialize in small business web
                design and development for clients anywhere in the US and
                Canada. Every line of code is written by hand to ensure the best
                performance and make Google happy, which helps bring in more
                customers to your site and bring more revenue to your business.
                We also manage the edits for you and will never leave you high
                and dry. Our goal is to create long term relationships with our
                clients and see them grow over time.
              </div>
            </div>

            <Body />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
