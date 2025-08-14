import BlueCheck from "../../components/BlueCheck";
import ButtonSolid from "../../components/ButtonSolid";

interface PricingProps {
  currency: string;
}
const Pricing = (props: PricingProps) => {
  return (
    <>
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
                    {props.currency === "USD" ? "$15" : "₱850"}/mo Hosting
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    {props.currency === "USD" ? "$100" : "₱5,500"} Fee Per Page
                    After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +{props.currency === "USD" ? "$50" : "₱2,800"}/mo Unlimited
                    edits Add-on
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    {props.currency === "USD" ? "$150" : "₱8,500"} To Add A Blog
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
                    {props.currency === "USD" ? "$1500" : "₱85k"}
                    <span className="PIPDuration Text-Color">
                      +{props.currency === "USD" ? "$15" : "₱850"}/mo Hosting
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
                    {props.currency === "USD" ? "$100" : "₱5,500"} Fee Per Page
                    After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    Unlimited Edits
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature  ">
                    +{props.currency === "USD" ? "$150" : "₱8,500"} To Add A
                    Blog
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
                    {props.currency === "USD" ? "$150" : "₱8,500"}
                    <span className="PIPDuration">Per Month</span>
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
                    {props.currency === "USD" ? "$15" : "₱850"}/mo Hosting
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    {props.currency === "USD" ? "$100" : "₱5,500"} Fee Per Page
                    After 5
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +{props.currency === "USD" ? "$50" : "₱2,800"}/mo Unlimited
                    edits Add-on
                    <BlueCheck />
                  </li>
                  <li className="PricingFeature Text-Color">
                    +{props.currency === "USD" ? "$150" : "₱8,500"} To Add A
                    Blog
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
                    {props.currency === "USD" ? "N/A" : "N/A"}
                    {/* <span className="PIPDuration Text-Color">Starting</span> */}
                  </span>
                </div>
                <div className="pb-5">
                  <ButtonSolid
                    className="bg-primary color-black secondary-hover"
                    linkTo="/ContactUs"
                    text="Coming soon"
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

export default Pricing;
