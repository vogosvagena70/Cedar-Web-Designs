import "../styles/footer.css";
import CedarSVG from "../assets/images/Logo/CEDAR.svg";
import ButtonSolid from "../components/ButtonSolid";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="FooterWrapper">
          <div className="FooterContainer">
            <div className="Footer1">
              <img className="Logo" src={CedarSVG} alt="Cedar Logo"></img>
              <div className="Footer1Description">
                We believe small businesses deserve better. Just because you’re
                small, doesn’t mean your site needs to be. Let us make you
                something amazing.
              </div>
              <div className="ContactUsBtnFooter">
                <ButtonSolid className="bg-white color-black" />
              </div>
            </div>
            <div className="Footer2">
              <h1 className="ContactInformationFotterText">
                Contact Information
              </h1>
              <span>09060672336</span>
              <span>mhd.bassel.a70@gmail.com</span>
              <span>Philippines</span>
            </div>
          </div>
          <div className="FooterSign">
            <span>© Copyright 2025 Cedar Web Designs</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
