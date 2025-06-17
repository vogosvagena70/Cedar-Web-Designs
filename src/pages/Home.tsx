import Body from "../components/Body";
import ButtonSolid from "../components/ButtonSolid";
import "../styles/home.css";
import mockup from "../assets/images/mockup.png";
const Home = () => {
  return (
    <>
      <div className="Hero-filler"></div>
      <div className="Hero-wrapper">
        <div className="hero">
          <div className="cs-content">
            <div className="cs-topper">Custom Designs, Custom Coded</div>
            <h1 className="cs-title">Small Business Web Designer</h1>
            <div className="cs-text">
              No page builders or WordPress. We offer 100% hand-coded websites
              with superior results starting at $175/mo as well as Google Ads
              and SEO services.
            </div>
            <div className="cs-button-box">
              <ButtonSolid />
              <div>About us</div>
            </div>
          </div>
          <picture className="cs-picture">
            <img
              alt="a laptop showing Nakhal.com, and a mobile showing sentient.dk"
              src={mockup}
              width={636}
              height={593}
            ></img>
          </picture>
        </div>
      </div>
      <Body />
    </>
  );
};

export default Home;
