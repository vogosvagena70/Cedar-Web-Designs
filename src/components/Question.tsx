import { useState } from "react";
import faqStyle from "../styles/faq.module.css";
import type { FAQItem } from "../types/FAQItem";

interface QuestionProps {
  item: FAQItem;
}

const Question = (props: QuestionProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className={faqStyle.FAQList} onClick={() => setActive(!active)}>
      <div className={` ${faqStyle.TextColor} ${faqStyle.QuestionClick}`}>
        {props.item.Question}
      </div>
      <div
        className={`${faqStyle.wrapper} ${
          active === true ? faqStyle.active : ""
        }`}
      >
        <div
          className={`${faqStyle.inner} ${faqStyle.TextColor}
                  `}
        >
          {props.item.Answer}
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Question;
