import "../styles/socialMediaAds.css";
import "../styles/fontsizes.css";
import { useEffect } from "react";
import Universe from "../components/Universe";
import Filler from "../components/Filler";
import Wave from "../components/Wave";
import Chezka from "../assets/images/Chezka-Social-Media-Ads.jpeg";
import ButtonSolid from "../components/ButtonSolid";
const SocialMediaAds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Social Media Ads | Cedar Web Designs</title>
      <meta
        content="Increase your ROI with Cedar Web Designs’ professional Social Media Ads service. We provide custom strategies, smart targeting, and ongoing optimization to help your business grow."
        name="description"
      ></meta>
      <link
        rel="canonical"
        href="https://www.cedarwebdesigns.com/SocialMediaAds"
      />

      {/* Open Graph Tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Contact Us | Social Media Ads" />
      <meta
        property="og:description"
        content="Increase your ROI with Cedar Web Designs’ professional Social Media Ads service. We provide custom strategies, smart targeting, and ongoing optimization to help your business grow."
      />
      <meta
        property="og:url"
        content="https://www.cedarwebdesigns.com/SocialMediaAds"
      />

      <section className="HeroSection" id="HeroSection">
        <Universe />
        <Filler />
        <Wave />
      </section>
      <section id="SocialMediaAds">
        <div className="Wrapper">
          <div className="Container">
            <div className="ChezkaImgContainer">
              <img
                src={Chezka}
                width={500}
                height={1021}
                className="ChezkaBadgeImg"
              ></img>
              <div className="BasselItaniBadge">
                <div className="BadgeText">
                  <span className="BasselItaniBadgeTitle">Chezka Kae</span>
                  <span className="OwnderDeveloper">Media Ads Strategist</span>
                </div>
                <div></div>
              </div>
            </div>
            <div className="SocialMediaAdsDescription color-white">
              <h1 className="Text-Color">Social Media Ads Services</h1>
              <p className="Text-Color Separator">
                Maximize your ROI with Cedar Web Designs’ specialized social
                media advertising solutions. We create targeted campaigns
                designed to boost traffic and drive meaningful conversions.
              </p>
              <h2 className="Text-Color">
                Why Choose Our Social Media Ads Services?
              </h2>
              <p className="Text-Color Separator">
                At Cedar Web Designs, we recognize that every business is
                different. That’s why we design custom social media ad campaigns
                aligned with your goals and budget. Our strategy is rooted in
                thorough research, accurate targeting, and continuous
                optimization.
              </p>
              <h3 className="Text-Color">Our Process</h3>
              <p className="Text-Color Partial-Separator">
                We implement a proven, structured approach to maximize the
                performance of your Social Media Ads campaigns:
              </p>
              <ul className="Separator pl-15">
                <li className="Text-Color">
                  Initial consultation to understand your business goals
                </li>
                <li className="Text-Color">
                  In-depth keyword analysis to identify terms that drive
                  conversions
                </li>
                <li className="Text-Color">
                  Crafting compelling ad copy tailored to engage your ideal
                  audience
                </li>
                <li className="Text-Color">
                  Refining ad targeting to connect with your most relevant
                  customers
                </li>
                <li className="Text-Color">
                  Continuous monitoring and optimization to maximize campaign
                  performance
                </li>
              </ul>
              <h2 className="Text-Color">Key Benefits of Our Service</h2>
              <p className="Text-Color Partial-Separator">
                Partnering with Cedar Web Designs for Social Media Ads
                management means gaining access to:
              </p>
              <ul className="Separator pl-15">
                <li className="Text-Color">
                  Enhanced presence in Google search rankings
                </li>
                <li className="Text-Color">
                  Lower advertising costs paired with higher campaign
                  profitability
                </li>
                <li className="Text-Color">
                  Clear, data-driven reports that guide informed decisions
                </li>
                <li className="Text-Color">
                  Minimized ad spend on unqualified or low-intent traffic
                </li>
                <li className="Text-Color">
                  Higher conversion rates through strategically optimized
                  landing pages
                </li>
              </ul>
              <h3 className="Text-Color">Boost Your Business with Experts</h3>
              <p className="Text-Color Separator">
                Our solutions are built to give you a competitive edge and drive
                more leads. Whether your goal is boosting sales or growing brand
                visibility, our experienced team is here to navigate the ins and
                outs of Social Media Advertising for you.
              </p>
              <h2 className="Text-Color">Get Started Today</h2>
              <p className="Text-Color">
                Get in touch with Cedar Web Designs to discover how our Social
                Media Ads management can drive your business growth. Book a free
                consultation and start building a results-driven ad campaign
                today.
              </p>
              <div className="buttons-container">
                <div>
                  <ButtonSolid
                    className=" bg-primary color-black secondary-hover"
                    linkTo="/ContactUs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaAds;
