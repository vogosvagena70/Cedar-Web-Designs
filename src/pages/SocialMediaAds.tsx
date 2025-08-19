import SSMStyle from "../styles/socialMediaAds.module.css";
import "../styles/fontsizes.css";
import { useEffect } from "react";
import Universe from "../components/Universe";
import Filler from "../components/Filler";
import Wave from "../components/Wave";
import Chezka from "../assets/images/Chezka-Social-Media-Ads.avif";
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

      <section className={SSMStyle.HeroSection} id="HeroSection">
        <Universe />
        <Filler />
        <Wave />
      </section>
      <section id="SocialMediaAds">
        <div className={SSMStyle.Wrapper}>
          <div className={SSMStyle.Container}>
            <div className={SSMStyle.ChezkaImgContainer}>
              <img
                src={Chezka}
                width={500}
                height={1021}
                className={SSMStyle.ChezkaBadgeImg}
              ></img>
              <div className={SSMStyle.BasselItaniBadge}>
                <div className={SSMStyle.BadgeText}>
                  <span className={SSMStyle.BasselItaniBadgeTitle}>
                    Chezka Kae
                  </span>
                  <span className={SSMStyle.OwnderDeveloper}>
                    Media Ads Strategist
                  </span>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={`${SSMStyle.SocialMediaAdsDescription} ${SSMStyle.ColorWhite}`}
            >
              <h1 className={SSMStyle.TextColor}>Social Media Ads Services</h1>
              <p className={`${SSMStyle.TextColor} ${SSMStyle.Separator}`}>
                Maximize your ROI with Cedar Web Designs’ specialized social
                media advertising solutions. We create targeted campaigns
                designed to boost traffic and drive meaningful conversions.
              </p>
              <h2 className={SSMStyle.TextColor}>
                Why Choose Our Social Media Ads Services?
              </h2>
              <p className={`${SSMStyle.TextColor} ${SSMStyle.Separator}`}>
                At Cedar Web Designs, we recognize that every business is
                different. That’s why we design custom social media ad campaigns
                aligned with your goals and budget. Our strategy is rooted in
                thorough research, accurate targeting, and continuous
                optimization.
              </p>
              <h3 className={SSMStyle.TextColor}>Our Process</h3>
              <p
                className={`${SSMStyle.TextColor} ${SSMStyle.PartialSeperator}`}
              >
                We implement a proven, structured approach to maximize the
                performance of your Social Media Ads campaigns:
              </p>
              <ul className={`${SSMStyle.Seperator} ${SSMStyle.pl15}`}>
                <li className={SSMStyle.TextColor}>
                  Initial consultation to understand your business goals
                </li>
                <li className={SSMStyle.TextColor}>
                  In-depth keyword analysis to identify terms that drive
                  conversions
                </li>
                <li className={SSMStyle.TextColor}>
                  Crafting compelling ad copy tailored to engage your ideal
                  audience
                </li>
                <li className={SSMStyle.TextColor}>
                  Refining ad targeting to connect with your most relevant
                  customers
                </li>
                <li className={SSMStyle.TextColor}>
                  Continuous monitoring and optimization to maximize campaign
                  performance
                </li>
              </ul>
              <h2 className={SSMStyle.TextColor}>
                Key Benefits of Our Service
              </h2>
              <p
                className={`${SSMStyle.TextColor} ${SSMStyle.PartialSeperator}`}
              >
                Partnering with Cedar Web Designs for Social Media Ads
                management means gaining access to:
              </p>
              <ul className={`${SSMStyle.Seperator} ${SSMStyle.pl15}`}>
                <li className={SSMStyle.TextColor}>
                  Enhanced presence in Google search rankings
                </li>
                <li className={SSMStyle.TextColor}>
                  Lower advertising costs paired with higher campaign
                  profitability
                </li>
                <li className={SSMStyle.TextColor}>
                  Clear, data-driven reports that guide informed decisions
                </li>
                <li className={SSMStyle.TextColor}>
                  Minimized ad spend on unqualified or low-intent traffic
                </li>
                <li className={SSMStyle.TextColor}>
                  Higher conversion rates through strategically optimized
                  landing pages
                </li>
              </ul>
              <h3 className={SSMStyle.TextColor}>
                Boost Your Business with Experts
              </h3>
              <p className={`${SSMStyle.TextColor} ${SSMStyle.Seperator}`}>
                Our solutions are built to give you a competitive edge and drive
                more leads. Whether your goal is boosting sales or growing brand
                visibility, our experienced team is here to navigate the ins and
                outs of Social Media Advertising for you.
              </p>
              <h2 className={SSMStyle.TextColor}>Get Started Today</h2>
              <p className={SSMStyle.TextColor}>
                Get in touch with Cedar Web Designs to discover how our Social
                Media Ads management can drive your business growth. Book a free
                consultation and start building a results-driven ad campaign
                today.
              </p>
              <div className={SSMStyle.ButtonsContainer}>
                <div>
                  <ButtonSolid
                    className="bg-primary color-black secondary-hover"
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
