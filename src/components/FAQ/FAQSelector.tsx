import faqStyle from "../../styles/faq.module.css";

interface FAQSelectorProps {
  handleSetSelectedFAQ: (index: number) => void;
  selectedFAQ: number;
}
const FAQSelector = (props: FAQSelectorProps) => {
  return (
    <div className={`${faqStyle.FAQSelectContainer}`}>
      <div
        onClick={() => props.handleSetSelectedFAQ(1)}
        className={`${faqStyle.FAQSelectBox} ${faqStyle.TextColor} ${
          props.selectedFAQ === 1 ? faqStyle.Active : ""
        }`}
      >
        PRICING
      </div>
      <div
        onClick={() => props.handleSetSelectedFAQ(2)}
        className={`${faqStyle.FAQSelectBox}  ${faqStyle.TextColor} ${
          props.selectedFAQ === 2 ? faqStyle.Active : ""
        }`}
      >
        WEBSITES
      </div>
    </div>
  );
};

export default FAQSelector;
