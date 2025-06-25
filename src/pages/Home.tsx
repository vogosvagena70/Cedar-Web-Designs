import ButtonSolid from "../components/ButtonSolid";
import "../styles/home.css";
import "../styles/fontsizes.css";
import mockup from "../assets/images/mockup.png";
import basselItani from "../assets/images/bassel-itani.jpeg";
import Chezka from "../assets/images/chezka.jpeg";
import check from "../assets/images/check.png";
import ServiceBox from "../components/ServiceBox";
import NakhalLaptop from "../assets/images/Portfolio/Nakhal/Nakhal-Laptop-Mobile.png";
import SkyjunxionLaptopMobile from "../assets/images/Portfolio/Skyjunxion/Skyjunxion-Laptop-Mobile.png";
import SentientLaptopMobile from "../assets/images/Portfolio/Sentient/Sentient-Laptop-Mobile.png";
import blueCheck from "../assets/icons/blue-check.png";
import forbidden from "../assets/icons/forbidden.png";
const Services1 = [
  {
    Title: "Mobile First Design",
    Body: "We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste and makes the site even more responsive.",
    LinkText: "Get Started",
    LinkURL: "",
    SVG: "mobile",
  },
  {
    Title: "Full Responsive",
    Body: "Your website will fit all mobile screens sizes, tablets, and desktop sizes so visitors can access your site from anywhere and see a beautiful site no matter the screen size.",
    LinkText: "Get Started",
    LinkURL: "",
    SVG: "mobileandlaptop",
  },
  {
    Title: "Optimized Page Speed",
    Body: "If your site takes more than 3 seconds to load you can lose up to 50% your traffic because it took too long. Our sites load 1 second or less ensuring everyone that visits your site reaches it.",
    LinkText: "More About Page Speed",
    LinkURL: "",
    SVG: "clock",
  },
];

const Services2 = [
  {
    Title: "SEO Services",
    Body: "We have an in-house SEO specialist who understands local SEO and how to rank in your local market with plenty of case studies to show results and monthly reports.",
    LinkText: "More About SEO",
    LinkURL: "",
    SVG: "seo",
  },
  {
    Title: "Google PPC Ads",
    Body: "We also offer Pay-Per-Click Google ads creation and management with our Google Ads expert who can create effective ad campaigns to maximize your ROI.",
    LinkText: "More About Ads",
    LinkURL: "",
    SVG: "ads",
  },
  {
    Title: "Clean & Maintainable Code",
    Body: "Our websites are built with clean, modular code that's easy to maintain, scale, or hand off — perfect for businesses that care about performance and long-term stability.",
    LinkText: "See How We Code",
    LinkURL: "",
    SVG: "code",
  },
];

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
                  <ButtonSolid className="bg-white color-black" />
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
            <div className="ListWrapper">
              <ul className="ListItemContainer">
                {Services1.map((item) => {
                  return (
                    <ServiceBox
                      Body={item.Body}
                      LinkText={item.LinkText}
                      SVG={item.SVG}
                      Title={item.Title}
                      URL={item.LinkURL}
                    />
                  );
                })}
              </ul>
              <div className="mt-5r"></div>
              <ul className="ListItemContainer">
                {Services2.map((item) => {
                  return (
                    <ServiceBox
                      Body={item.Body}
                      LinkText={item.LinkText}
                      SVG={item.SVG}
                      Title={item.Title}
                      URL={item.LinkURL}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="put-center">
            <ButtonSolid className="bg-primary color-white" />
          </div>
        </div>
      </section>

      <section>
        <div className="WhatWeOfferWrapper mt-10r">
          <div className="WhatWeOfferContainer">
            <div className="WhatWeOfferTextContainer ">
              <div className="WhatWeOfferTopper">WHAT WE OFFER</div>
              <div className="WhatWeOfferTitle">
                Websites Starting At $0 Down And $125 Per Month
              </div>
              <div className="mt-2 WhatWeOfferDescription">
                We offer $0 down for a standard 5 page small business website.
                If you need more than that then we have to do custom pricing
                based on the scope of work, number of additional pages, and time
                involved. <strong>12 month minimum contract</strong>. Includes
                design, development, hosting, unlimited edits, 24/7 support, and
                lifetime updates.
              </div>
              <ul className="OfferList mt-4">
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>100% Secure</h3>
                  </div>
                  <div className="OfferDescription">
                    Our sites are pure static HTML and CSS, with nothing
                    hackable.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>Designed From The Ground Up</h3>
                  </div>
                  <div className="OfferDescription">
                    Our designs are done in-house, giving us complete control.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>100% Speed Score</h3>
                  </div>
                  <div className="OfferDescription">
                    Purpose-built with zero excess, our sites hit top marks on
                    Google speed: 98–100.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>Money Back Gurantee</h3>
                  </div>
                  <div className="OfferDescription">
                    Don’t love the design? You get your money back and we cancel
                    the contract.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>24/7 Support</h3>
                  </div>
                  <div className="OfferDescription">
                    Call or text anytime. You get straight to me — the owner and
                    developer.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <img src={check} height={24} width={24}></img>
                    <h3>SEO Is What We Do</h3>
                  </div>
                  <div className="OfferDescription">
                    No gimmicks, no BS — just clear SEO explained and real
                    strategies to boost your rank.
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <ButtonSolid className="bg-primary color-white" />
              </div>
            </div>
            <div className="WhatWeOfferImageContainer">
              <img
                className="BadgeImg"
                src={basselItani}
                width={650}
                height={878}
              ></img>
              <div className="BasselItaniBadge">
                <div className="BadgeText">
                  <span className="BasselItaniBadgeTitle">BASSEL ITANI</span>
                  <span>Owner, Developer</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Portfolio">
        <div className="PortfolioWrapper">
          <div className="PortfolioContainer">
            <div className="PortfolioDescriptionContainer">
              <div className="PortfolioDescriptionLeft">
                <span className="Topper">PORTFOLIO</span>
                <h2 className="text-large">SOME OF THE WORK WE'VE DONE</h2>
              </div>
              <div className="PortfolioDescriptionRight">
                <span>
                  We have worked with clients all over the US and Canada for
                  home services contractors, restaurants, consulting agencies,
                  start ups, dermatologists, doctors, accountants, and more. No
                  matter what your business is, we can build a website that is
                  effective, beautiful, performant, and tailored to your
                  industry.
                </span>
              </div>
            </div>
            <div className="PortfolioListContainer">
              <ul className="PortfolioList">
                <li className="PortfolioItem">
                  <div className="PortfolioItemContainer">
                    <img
                      className="PortfolioItemImg"
                      src={NakhalLaptop}
                      height={270}
                      width={413}
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2>Sentient Consulting</h2>
                      <span>
                        Sentient Consulting provides easy invoicing and
                        accounting solutions in the EU.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid className="bg-primary color-white" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="PortfolioItem">
                  <div className="PortfolioItemContainer">
                    <img
                      className="PortfolioItemImg"
                      src={SkyjunxionLaptopMobile}
                      height={270}
                      width={413}
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2>Sentient</h2>
                      <span>
                        Sentient provides easy invoicing and accounting
                        solutions in the EU.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid className="bg-primary color-white" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="PortfolioItem">
                  <div className="PortfolioItemContainer">
                    <img
                      className="PortfolioItemImg"
                      src={SentientLaptopMobile}
                      height={270}
                      width={413}
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2>Sentient</h2>
                      <span>
                        Sentient provides easy invoicing and accounting
                        solutions in the EU.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid className="bg-primary color-white" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="Pricing-filler"></div>
      <section id="pricing">
        <div className="PricingWrapper">
          <div className="PricingContainer">
            <div className="PricingHeader">
              <div className="PricingTitle">
                <div className="Topper">OUR PRICING</div>
                <h1 className="PricingTitleTitle">
                  PRICING PACKAGE FOR EVERY BUDGET
                </h1>
              </div>
            </div>
            <div className="PricingList">
              <div className="PricingItem">
                <h1 className="PricingItemTitle">LUMP SUM</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature">
                    Design And Development
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    $25/mo Hosting
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    $100 Fee Per Page After 5
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    +$50/mo Unlimited edits Add-on
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    +$250 To Add A Blog
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    24/7 Support
                    <img
                      className="float-right"
                      src={forbidden}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    Lifetime Updates
                    <img
                      className="float-right"
                      src={forbidden}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle">
                    $3800<span className="PIPDuration">+$25/mo Hosting</span>
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid className="bg-primary color-white" />
                </div>
              </div>
              <div className="PricingItem bg-color-darkblue color-white">
                <h1 className="PricingItemTitle">MONTHLY</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature">
                    Design And Development
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    Includes Hosting
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    $100 Fee Per Page After 5
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    Unlimited Edits
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    +$250 To Add A Blog
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    24/7 Support
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    Lifetime Updates
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle">
                    $175<span className="PIPDuration">Per Month</span>
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid className="bg-white color-black" />
                </div>
              </div>
              <div className="PricingItem">
                <h1 className="PricingItemTitle">Ecommerce</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature">
                    Design And Development
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    $25/mo Hosting
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    $100 Fee Per Page After 5
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    +$50/mo Unlimited edits Add-on
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    +$250 To Add A Blog
                    <img
                      className="float-right"
                      src={blueCheck}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    24/7 Support
                    <img
                      className="float-right"
                      src={forbidden}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                  <li className="PricingFeature">
                    Lifetime Updates
                    <img
                      className="float-right"
                      src={forbidden}
                      height={18}
                      width={18}
                    ></img>
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle">
                    $8k<span className="PIPDuration">Starting</span>
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid className="bg-primary color-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="ReviewsWrapper">
          <div className="ReviewsContainer">
            <div className="ReviewsDescription">
              <span className="Topper">Testimonials</span>
              <h1 className="PricingTitleTitle">
                Trusted Web Designer Across The Country
              </h1>
            </div>
            <div className="ReviewsFlex">
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={basselItani}
                  width={150}
                  height={150}
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate, blanditiis eos temporibus aspernatur laboriosam
                    ipsam.
                  </span>

                  <h1 className="Reviewer">Bassel Itani</h1>
                </div>
              </div>
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={Chezka}
                  width={150}
                  height={150}
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate, blanditiis eos temporibus aspernatur laboriosam
                    ipsam.
                  </span>
                  <h1 className="Reviewer">Chezka Kae</h1>
                </div>
              </div>
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={Chezka}
                  width={150}
                  height={150}
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate, blanditiis eos temporibus aspernatur laboriosam
                    ipsam.
                  </span>
                  <h1 className="Reviewer">Chezka Kae</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
