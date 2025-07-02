import "../styles/home.css";
import "../styles/fontsizes.css";
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, handleSubmit] = useForm("meokdool");
  if (state.succeeded) {
    console.log(state.errors);
  }

  return (
    <>
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

        <div className="ContactusFiller">
          <h2 className="color-white ContactUsTitle">Contat Us</h2>
        </div>

        <div style={{ position: "relative" }}>
          <svg
            className="cs-wave desktop"
            fill="none"
            viewBox="0 0 1920 136"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1920 136V0C1803.21 45.3334 1445.52 136 951 136C456.485 136 111.116 45.3334 0 0V136H951H1920Z"
              fill="var(--maskBG)"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </section>
      <section id="ContactUs">
        <div className="ContactUsWrapper">
          <div className="ContactUsContainer">
            <div className="ContactUs color-white">
              <span className="Topper">Contact us</span>
              <span>
                <h1 className="Text-Color hero-title font-XL">Get in touch</h1>
              </span>
              <div className="hero-text-container">
                <span className="Text-Color hero-text">
                  Send us an email and let us know everything you want out of a
                  new site. We respond to everyone within 24 hours of contacting
                  us. Or give us a call and reach us immediately for a chat. If
                  we are unavailable we will call back same day.
                </span>
              </div>
              <div>
                <ul className="ContactusList">
                  <li className="ContactusItem">
                    <svg
                      className="ContactusIcon"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                    </svg>
                    <div>
                      <h2 className="Text-Color">PHONE</h2>
                      <span className="">
                        <a
                          href="tel:+639060672336"
                          className="FooterContactUnits Text-Color"
                        >
                          +63 (9) 060672336
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="ContactusItem">
                    <svg
                      className="ContactusIcon"
                      width="30px"
                      height="30px"
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
                    <div>
                      <h2 className="Text-Color">Email</h2>
                      <span className="Text-Color">
                        <a
                          href="emailto:mhd.bassel.a70@gmail.com"
                          className="FooterContactUnits Text-Color"
                        >
                          mhd.bassel.a70@gmail.com
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="ContactusItem">
                    <svg
                      className="ContactusIcon2"
                      width="30px"
                      height="30px"
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
                    <div>
                      <h2 className="Text-Color">Location</h2>
                      <span className="Text-Color">Philippines</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <form
              className="ContactForm"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/meokdool"
              method="post"
            >
              <h2 className="Text-Color ContactusFormTitle">
                Make Appointment
              </h2>
              <div className="ContactUsField">
                <span className="Text-Color">Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="Input"
                  name="name"
                ></input>
              </div>
              <div className="ContactUsField">
                <span className="Text-Color">Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="Input"
                  name="email"
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="ContactUsField">
                <span className="Text-Color">Phone</span>
                <input
                  type="phone number"
                  placeholder="Phone"
                  className="Input"
                  name="phone"
                ></input>
              </div>
              <div className="ContactUsField">
                <span className="Text-Color">Message</span>
                <textarea
                  id="ContactusMessage"
                  placeholder="Write Message..."
                  className="Input"
                  name="message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-primary color-black secondary-hover cs-button-solid bg-white"
                >
                  Submit
                </button>
              </div>

              {state.succeeded === true ? (
                <p className="Text-Color">
                  Thank you for submitting! We will contact you as soon as
                  possible.
                </p>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
