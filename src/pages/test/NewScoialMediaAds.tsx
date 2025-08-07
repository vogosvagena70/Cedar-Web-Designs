import socialMediaAdsStyle from "../styles/socialMediaAds.module.css";
import "../styles/fontsizes.css";
import { useEffect } from "react";
import Universe from "../../components/Universe";
import Filler from "../../components/Filler";
import Wave from "../../components/Wave";
import Chezka from "../assets/images/Chezka-Social-Media-Ads.jpeg";
import ButtonSolid from "../../components/ButtonSolid";
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

      <section
        className={`${socialMediaAdsStyle.HeroSection}`}
        id="HeroSection"
      >
        <Universe />
        <Filler />
        <Wave />
      </section>
      <section id="SocialMediaAds">
        <div className={`${socialMediaAdsStyle.Wrapper}`}>
          <div className={`${socialMediaAdsStyle.Container}`}>
            <div className={`${socialMediaAdsStyle.ChezkaImgContainer}`}>
              <img
                src={Chezka}
                width={500}
                height={1021}
                className={`${socialMediaAdsStyle.ChezkaBadgeImg}`}
              ></img>
              <div className={`${socialMediaAdsStyle.BasselItaniBadge}`}>
                <div className={`${socialMediaAdsStyle.BadgeText}`}>
                  <span
                    className={`${socialMediaAdsStyle.BasselItaniBadgeTitle}`}
                  >
                    Chezka Kae
                  </span>
                  <span className={`${socialMediaAdsStyle.OwnderDeveloper}`}>
                    Media Ads Strategist
                  </span>
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={`${socialMediaAdsStyle.SocialMediaAdsDescription} ${socialMediaAdsStyle.ColorWhite}`}
            >
              <h1 className={`${socialMediaAdsStyle.TextColor}`}>
                Social Media Ads Services
              </h1>
              <p
                className={`${socialMediaAdsStyle.TextColor} ${socialMediaAdsStyle.Separator}`}
              >
                Maximize your ROI with Cedar Web Designs’ specialized social
                media advertising solutions. We create targeted campaigns
                designed to boost traffic and drive meaningful conversions.
              </p>
              <h2 className={`${socialMediaAdsStyle.TextColor}`}>
                Why Choose Our Social Media Ads Services?
              </h2>
              <p
                className={`${socialMediaAdsStyle.TextColor} ${socialMediaAdsStyle.Separator}`}
              >
                At Cedar Web Designs, we recognize that every business is
                different. That’s why we design custom social media ad campaigns
                aligned with your goals and budget. Our strategy is rooted in
                thorough research, accurate targeting, and continuous
                optimization.
              </p>
              <h3 className={`${socialMediaAdsStyle.TextColor}`}>
                Our Process
              </h3>

              <p
                className={`${socialMediaAdsStyle.TextColor} ${socialMediaAdsStyle.PartialSeparator}`}
              >
                We implement a proven, structured approach to maximize the
                performance of your Social Media Ads campaigns:
              </p>

              <ul
                className={`${socialMediaAdsStyle.Separator} ${socialMediaAdsStyle.pl15}`}
              >
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Initial consultation to understand your business goals
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  In-depth keyword analysis to identify terms that drive
                  conversions
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Crafting compelling ad copy tailored to engage your ideal
                  audience
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Refining ad targeting to connect with your most relevant
                  customers
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Continuous monitoring and optimization to maximize campaign
                  performance
                </li>
              </ul>
              <h2 className={`${socialMediaAdsStyle.TextColor}`}>
                Key Benefits of Our Service
              </h2>
              <p
                className={`${socialMediaAdsStyle.TextColor} ${socialMediaAdsStyle.PartialSeparator}`}
              >
                Partnering with Cedar Web Designs for Social Media Ads
                management means gaining access to:
              </p>
              <ul
                className={`${socialMediaAdsStyle.Separator} ${socialMediaAdsStyle.pl15}`}
              >
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Enhanced presence in Google search rankings
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Lower advertising costs paired with higher campaign
                  profitability
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Clear, data-driven reports that guide informed decisions
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Minimized ad spend on unqualified or low-intent traffic
                </li>
                <li className={`${socialMediaAdsStyle.TextColor}`}>
                  Higher conversion rates through strategically optimized
                  landing pages
                </li>
              </ul>
              <h3 className={`${socialMediaAdsStyle.TextColor}`}>
                Boost Your Business with Experts
              </h3>
              <p
                className={`${socialMediaAdsStyle.TextColor} ${socialMediaAdsStyle.Separator}`}
              >
                Our solutions are built to give you a competitive edge and drive
                more leads. Whether your goal is boosting sales or growing brand
                visibility, our experienced team is here to navigate the ins and
                outs of Social Media Advertising for you.
              </p>
              <h2 className={`${socialMediaAdsStyle.TextColor}`}>
                Get Started Today
              </h2>
              <p className={`${socialMediaAdsStyle.TextColor}`}>
                Get in touch with Cedar Web Designs to discover how our Social
                Media Ads management can drive your business growth. Book a free
                consultation and start building a results-driven ad campaign
                today.
              </p>
              <div className={`${socialMediaAdsStyle.ButtonsContainer}`}>
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
