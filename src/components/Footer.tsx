import "../styles/footer.css";
import CedarSVG from "../assets/images/Logo/cedar.svg";
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
              <div className="ContactInformationIconsContainer">
                <svg
                  className="FooterIcon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                </svg>
                <div>09060672336</div>
              </div>
              <div className="ContactInformationIconsContainer">
                <svg
                  className="FooterIcon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  />
                </svg>
                <div>mhd.bassel.a70@gmail.com</div>
              </div>
              <div className="ContactInformationIconsContainer">
                <svg
                  className="FooterIcon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>Philippines</div>
              </div>
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
