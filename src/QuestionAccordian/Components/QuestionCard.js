import React, { useState } from "react";
import QuestionData from "../Data/Data";
import SingleQuestion from "./SingleQuestion";

const QuestionCard = () => {
  const [questionData, setQuestionData] = useState(QuestionData);
  const [activeAccordianIndex, setActiveAccordianIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeAccordianIndex === index) {
      setActiveAccordianIndex(null);
    } else {
      setActiveAccordianIndex(index);
    }
  };
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questionData.map((question, index) => {
            return (
              <SingleQuestion
                key={question.id}
                {...question}
                index={index}
                isOpen={activeAccordianIndex === index}
                onClick={() => handleAccordionClick(index)}
              ></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default QuestionCard;
