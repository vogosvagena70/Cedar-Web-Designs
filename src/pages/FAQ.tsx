/* eslint-disable @typescript-eslint/no-unused-vars */
import faqStyle from "../styles/faq.module.css";
import "../styles/fontsizes.css";
import { useEffect } from "react";
import Universe from "../components/Universe";
import Wave from "../components/Wave";
import Question from "../components/Question";
import type { FAQItem } from "../types/FAQItem";

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      Question: "How long does the subscription last?",
      Answer:
        "The subscription plan lasts for a minimum of 12 months and is month to month after that. Cancel anytime after the 12 months have passed. If you cancel, you don’t keep the site (otherwise everyone would just do that and we'd be out of business!).",
    },
    {
      Question:
        "What happens if I cancel after the 12 month minimum and want to come back?",
      Answer: "You just have to sign a new 12 month contract.",
    },
    {
      Question: "What happens if I cancel before the 12 months is over?",
      Answer:
        "If you cancel before the 12 months, you owe the full cost of what the site would normally cost ($3800) minus whatever you already paid. We prioritize long term relationships with our clients. And we want clients to share the same philosophy.",
    },
    {
      Question: "How do you handle late payments?",
      Answer:
        "Every invoice comes with a 7 day grace period to be paid. If an invoice is not paid within 7 days, there will be a $25 late fee applied. If you're on a subscription, and there are multiple monthly invoices that are overdue for months and late for months, we can cancel the contract and the client will be responsible for paying the full price of the site. We are generally very flexible and understanding of certain situations and often times offer assistance and help. But if there is no communication or replies to our messages, we have to take certain precautions to make sure we are paid for our time and effort in making the site and not being taken advantage of.",
    },
    {
      Question:
        "What do you use to take payment and what payment methods do you accept?",
      Answer:
        "We send email invoices via Square that has a link to a secure page for adding payment info. Subscriptions are paid with a credit card or debt card and we accept all major credit cards. Lump sum projects are paid with ACH bank transfer to minimize processing fees. WE DO NOT ACCEPT CHECKS OR MONEY ORDERS.",
    },
    {
      Question:
        "The additional per additional page, is that one time or monthly?",
      Answer:
        "The additional page fee is one time. Not recurring. So if you need 3 extra pages, that’s $300 and you’re done. Not $300 a month. That would be crazy!",
    },
    {
      Question: "Are there refunds?",
      Answer:
        "When you sign a contract, either lump sum or subscription, if we cannot design something you are 100% happy with and no longer want to move forward, then we will refund whatever you paid to get started. If we do end up moving forward with building the site, there are no refunds after that point. From then on, refunds are at our discretion.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>FAQ | Cedar Web Designs</title>
      <meta
        content="Get answers to all your questions about our pricing, web design and SEO packages, work, and process."
        name="description"
      ></meta>
      <link rel="canonical" href="https://www.cedarwebdesigns.com/faq" />

      {/* Open Graph Tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="FAQ | Cedar Web Designs" />
      <meta
        property="og:description"
        content="Get answers to all your questions about our pricing, web design and SEO packages, work, and process."
      />
      <meta property="og:url" content="https://www.cedarwebdesigns.com/faq" />

      <section className={faqStyle.HeroSection} id="HeroSection">
        <Universe />

        <div className={faqStyle.ContactusFiller}>
          <h2 className={`${faqStyle.ColorWhite} ${faqStyle.ContactUsTitle}`}>
            FAQ's
          </h2>
        </div>

        <Wave />
      </section>
      <section id="FAQ">
        <div className={`${faqStyle.FAQWrapper}`}>
          <div className={`${faqStyle.FAQContainer}`}>
            <div className={`${faqStyle.Hero} ${faqStyle.TextColor}`}>
              <span>
                <h1
                  className={`Font-XL ${faqStyle.HeroTitle} ${faqStyle.TextColor}`}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h1>
              </span>
              <div className={`${faqStyle.HeroTextContainer}`}>
                <span className={`${faqStyle.HeroText} ${faqStyle.TextColor}`}>
                  Browse our FAQ page for answers to everything you would like
                  to know about what we do, what we charge, our process, and how
                  everything works.
                </span>
              </div>
            </div>
            <div className={`${faqStyle.FAQListContainer}`}>
              {faqItems.map((value) => (
                <Question item={value} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
