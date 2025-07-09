import ButtonSolid from "../components/ButtonSolid";
import "../styles/home.css";
import "../styles/fontsizes.css";
import mockup from "../assets/images/mockup.avif";
import basselItani from "../assets/images/bassel-itani.avif";
import Chezka from "../assets/images/chezka.avif";
import Hicham from "../assets/images/hicham.jpeg";
import Ibrahim from "../assets/images/ibrahim.jpeg";
import ServiceBox from "../components/ServiceBox";
import NakhalLaptop from "../assets/images/Portfolio/Nakhal/Nakhal-Laptop-Mobile.avif";
import SkyjunxionLaptopMobile from "../assets/images/Portfolio/Skyjunxion/Skyjunxion-Laptop-Mobile.avif";
import SentientLaptopMobile from "../assets/images/Portfolio/Sentient/Sentient-Laptop-Mobile.avif";
import Check from "../components/Check";
import BlueCheck from "../components/BlueCheck";
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
    Title: "Social Media Ads",
    Body: "We also offer Pay-Per-Click Social Media ads creation and management with our Social Media Ads expert who can create effective ad campaigns to maximize your ROI.",
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
      <h1 className="visually-hidden">Cedar Web Designs</h1>
      <section className="HeroSection" id="HeroSection">
        <span className="Meteor1"></span>
        <span className="Meteor2"></span>
        <div className="Universe1">
          <div className="TestAnimation1"></div>
          <div className="TestAnimation2"></div>
          <div className="TestAnimation3"></div>
          <div className="TestAnimation4"></div>
          <div className="TestAnimation5"></div>
          <div className="TestAnimation6"></div>
          <div className="TestAnimation7"></div>
          <div className="TestAnimation8"></div>
          <div className="TestAnimation9"></div>
          <div className="TestAnimation10"></div>
          <div className="TestAnimation11"></div>
          <div className="TestAnimation12"></div>
          <div className="TestAnimation13"></div>
        </div>

        <div className="Universe2">
          <div className="TestAnimation1"></div>
          <div className="TestAnimation2"></div>
          <div className="TestAnimation3"></div>
          <div className="TestAnimation4"></div>
          <div className="TestAnimation5"></div>
          <div className="TestAnimation6"></div>
          <div className="TestAnimation7"></div>
          <div className="TestAnimation8"></div>
          <div className="TestAnimation9"></div>
          <div className="TestAnimation10"></div>
          <div className="TestAnimation11"></div>
          <div className="TestAnimation12"></div>
          <div className="TestAnimation13"></div>
        </div>

        <div className="Universe3">
          <div className="TestAnimation1"></div>
          <div className="TestAnimation2"></div>
          <div className="TestAnimation3"></div>
          <div className="TestAnimation4"></div>
          <div className="TestAnimation5"></div>
          <div className="TestAnimation6"></div>
          <div className="TestAnimation7"></div>
          <div className="TestAnimation8"></div>
          <div className="TestAnimation9"></div>
          <div className="TestAnimation10"></div>
          <div className="TestAnimation11"></div>
          <div className="TestAnimation12"></div>
          <div className="TestAnimation13"></div>
        </div>

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
                  websites with superior results starting at ₱8,700/mo as well
                  as Google Ads and SEO services.
                </span>
              </div>

              <div className="buttons-container">
                <div>
                  <ButtonSolid
                    className=" bg-primary color-black"
                    linkTo="/ContactUs"
                  />
                </div>
              </div>
            </div>

            <div className="mockup-container">
              <img
                className="mockup-img"
                src={mockup}
                width={636}
                height={593}
                alt="picture of a desktop and mobile mockup of Nakhal.com and Sentient.dk"
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
            <path d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z"></path>
          </svg>
        </div>
      </section>

      <section className="AboutUsSection" id="AboutUs">
        <div className="ServiceWrapper">
          <div className="ServicesContainer">
            <div className="ServiceDescriptionContainer">
              <div className=" Topper text-align-center">WHAT WE DO</div>
              <div className=" ">
                <p className="text-large text-align-center Text-Color">
                  NEVER WORRY ABOUT YOUR WEBSITE EVER AGAIN
                </p>
              </div>
              <div className="text-align-center pt-2 Text-Color">
                At Cedar Web Designs, we specialize in small business web design
                and development for clients anywhere. Every line of code is
                written by hand to ensure the best performance and make Google
                happy, which helps bring in more customers to your site and
                bring more revenue to your business. We also manage the edits
                for you and will never leave you high and dry. Our goal is to
                create long term relationships with our clients and see them
                grow over time.
              </div>
            </div>
            <div className="ListWrapper">
              <ul className="ListItemContainer">
                {Services1.map((item) => {
                  return (
                    <ServiceBox
                      Body={item.Body}
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
            <ButtonSolid
              className="bg-primary color-black secondary-hover"
              linkTo="/ContactUs"
            />
          </div>
        </div>
      </section>

      <section id="Services">
        <div className="WhatWeOfferWrapper">
          <div className="WhatWeOfferContainer">
            <div className="WhatWeOfferTextContainer ">
              <div className="WhatWeOfferTopper">WHAT WE OFFER</div>
              <div className="WhatWeOfferTitle Text-Color">
                Websites Starting At ₱0 Down And ₱8,700 Per Month
              </div>
              <div className="mt-2 WhatWeOfferDescription Text-Color">
                We offer ₱0 down for a standard 5 page small business website.
                If you need more than that then we have to do custom pricing
                based on the scope of work, number of additional pages, and time
                involved. <strong>6 month minimum contract</strong>. Includes
                design, development, hosting, unlimited edits, 24/7 support, and
                lifetime updates.
              </div>
              <ul className="OfferList mt-4">
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">100% Secure</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    Our sites are pure static HTML and CSS, with nothing
                    hackable.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">Designed From The Ground Up</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    Our designs are done in-house, giving us complete control.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">100% Speed Score</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    Purpose-built with zero excess, our sites hit top marks on
                    Google speed: 98–100.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">Money Back Gurantee</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    Don’t love the design? You get your money back and we cancel
                    the contract.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">24/7 Support</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    Call or text anytime. You get straight to me — the owner and
                    developer.
                  </div>
                </li>
                <li className="OfferItem">
                  <div className="OfferItemTitle">
                    <Check />
                    <h3 className="Text-Color">SEO Is What We Do</h3>
                  </div>
                  <div className="OfferDescription Text-Color">
                    No gimmicks, no BS — just clear SEO explained and real
                    strategies to boost your rank.
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <ButtonSolid
                  className="bg-primary color-black secondary-hover"
                  linkTo="/ContactUs"
                />
              </div>
            </div>
            <div className="WhatWeOfferImageContainer">
              <img
                className="BadgeImg"
                src={basselItani}
                width={650}
                height={878}
                alt="Picture of Bassel Itani, owner and developer of cedar web designs"
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
                <h2 className="text-large Text-Color">
                  SOME OF THE WORK WE'VE DONE
                </h2>
              </div>
              <div className="PortfolioDescriptionRight">
                <span className="Text-Color">
                  We have worked with clients all over the world for home
                  services contractors, restaurants, consulting agencies, start
                  ups, dermatologists, doctors, accountants, and more. No matter
                  what your business is, we can build a website that is
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
                      alt="Image mockup of Nakhal.com"
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2 className="Text-Color">Nakhal</h2>
                      <span className="Text-Color">
                        Nakhal, Lebanon's leading privately-owned travel agency,
                        has been serving travelers for over 60 years and has
                        been a valued client for more than 5 years.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid
                          text="Visit site"
                          className="bg-primary color-black secondary-hover"
                          linkTo="https://www.nakhal.com/"
                          blank={true}
                        />
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
                      alt="Image mockup of Skyjunxion.co"
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2 className="Text-Color">Skyjunxion</h2>
                      <span className="Text-Color">
                        For Skyjunxion, a B2B travel agency, we built a
                        streamlined platform that allows companies to easily
                        manage and approve employee flight requests.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid
                          text="Visit site"
                          className="bg-primary color-black secondary-hover"
                          linkTo="https://skyjunxion.co/"
                          blank={true}
                        />
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
                      alt="Image mockup of Sentient.dk"
                    ></img>
                    <div className="PortfolioItemDescriptionContainer">
                      <h2 className="Text-Color">Sentient</h2>
                      <span className="Text-Color">
                        For Sentient, a new invoicing company in the EU, we
                        developed their complete invoicing system from the
                        ground up, giving them full control with a custom-built,
                        user-friendly platform.
                      </span>
                      <div className="mt-4">
                        <ButtonSolid
                          text="Visit site"
                          className="bg-primary color-black secondary-hover"
                          linkTo="https://sentient.dk/"
                          blank={true}
                        />
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
                <h1 className="PricingTitleTitle Text-Color">
                  PRICING PACKAGE FOR EVERY BUDGET
                </h1>
              </div>
            </div>
            <div className="PricingList">
              <div className="PricingItem bg-color-white-pricing">
                <h1 className="PricingItemTitle Text-Color">LUMP SUM</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature Text-Color">
                    Design And Development
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    ₱1,400/mo Hosting
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    ₱5,800 Fee Per Page After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +₱3,000/mo Unlimited edits Add-on
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +₱14,500 To Add A Blog
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    24/7 Support
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="float-right"
                    >
                      <g id="Warning / Stop_Sign">
                        <path
                          id="Vector"
                          d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="Bawal "
                        />
                      </g>
                    </svg>
                  </li>

                  <li className="PricingFeature Text-Color">
                    Lifetime Updates
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="float-right"
                    >
                      <g id="Warning / Stop_Sign">
                        <path
                          id="Vector"
                          d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="Bawal "
                        />
                      </g>
                    </svg>
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle Text-Color">
                    ₱220k
                    <span className="PIPDuration Text-Color">
                      +₱1,450/mo Hosting
                    </span>
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid
                    className="bg-primary color-black secondary-hover"
                    linkTo="/ContactUs"
                  />
                </div>
              </div>
              <div className="PricingItem bg-color-darkblue-pricing color-white NeonBorder">
                <h1 className="PricingItemTitle  ">MONTHLY</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature  ">
                    Design And Development
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    Includes Hosting
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    ₱5,800 Fee Per Page After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    Unlimited Edits
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    +₱14,500 To Add A Blog
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    24/7 Support
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    Lifetime Updates
                    <BlueCheck />
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle">
                    ₱8,700<span className="PIPDuration">Per Month</span>
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid
                    className="bg-white color-black"
                    linkTo="/ContactUs"
                  />
                </div>
              </div>
              <div className="PricingItem bg-color-white-pricing">
                <h1 className="PricingItemTitle Text-Color">Ecommerce</h1>
                <ul className="PricingFeaturesList">
                  <li className="PricingFeature Text-Color">
                    Design And Development
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    ₱1,450/mo Hosting
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    ₱5,800 Fee Per Page After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +₱2,900/mo Unlimited edits Add-on
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +₱14,500 To Add A Blog
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    24/7 Support
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="float-right"
                    >
                      <g id="Warning / Stop_Sign">
                        <path
                          id="Vector"
                          d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="Bawal "
                        />
                      </g>
                    </svg>
                  </li>
                  <li className="PricingFeature Text-Color">
                    Lifetime Updates
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="float-right"
                    >
                      <g id="Warning / Stop_Sign">
                        <path
                          id="Vector"
                          d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="Bawal "
                        />
                      </g>
                    </svg>
                  </li>
                </ul>

                <div className="PricingItemPrice">
                  <span className="PIPTitle Text-Color">
                    ₱464k
                    <span className="PIPDuration Text-Color">Starting</span>
                  </span>
                </div>
                <div className="pb-5">
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
      <section id="testimonials">
        <div className="ReviewsWrapper">
          <div className="ReviewsContainer">
            <div className="ReviewsDescription">
              <span className="Topper">Testimonials</span>
              <h1 className="PricingTitleTitle Text-Color">
                Trusted Web Designer Across The Country
              </h1>
            </div>
            <div className="ReviewsFlex">
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={Chezka}
                  width={150}
                  height={150}
                  alt="Image of Chezka"
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  Text-Color">
                    Cedar Web delivered exactly what we needed. The site is
                    clean, fast, and user-friendly. Bassel's attention to detail
                    and quick responses made all the difference. I highly
                    recommend his services.
                  </span>
                  <h1 className="Reviewer Text-Color">Chezka Kae</h1>
                </div>
              </div>
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={Ibrahim}
                  width={150}
                  height={150}
                  alt="Image of Ibrahim"
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  Text-Color">
                    Working with Bassel has been an absolute pleasure. He took
                    the time to understand exactly what I wanted and brought my
                    vision to life. The site looks amazing and runs flawlessly.
                    Highly recommended!
                  </span>

                  <h1 className="Reviewer Text-Color">Ibrahim Al Sebaai</h1>
                </div>
              </div>
              <div className="ReviewItem">
                <img
                  className="ReviewImg"
                  src={Hicham}
                  width={150}
                  height={150}
                  unselectable="on"
                  alt="Image of Hicham"
                ></img>
                <div className="ReviewTextContainer">
                  <span className="ReviewReview  Text-Color">
                    Bassel and I worked together on my website, and I couldn’t
                    be happier. He’s easy to collaborate with and gets things
                    done right.
                  </span>
                  <h1 className="Reviewer Text-Color">Hicham Nehme</h1>
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
